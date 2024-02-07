import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import Usuario from "../models/Usuario";
import UsuarioLogin from "../models/UsuarioLogin";
import { buscar, login } from "../services/Service";
import { toastAlerta } from "../utils/toastAlerta";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuarioLogin: UsuarioLogin): Promise<void>;
  isLoading: boolean;
  seuUsuario: Usuario; // Adicionando seuUsuario ao tipo AuthContextProps
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    cpf_cnpj: "",
    tipo: "",
    data: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);
      toastAlerta("Usuário logado com sucesso", "sucesso");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toastAlerta("Dados do usuário inconsistentes", "erro");
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      email: "",
      senha: "",
      foto: "",
      cpf_cnpj: "",
      tipo: "",
      data: "",
      token: "",
    });
  }

  const [seuUsuario, setSeuUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    cpf_cnpj: "",
    tipo: "",
    data: "",
    produtos: null,
  });

  const token = usuario.token;
  const idUsuarioLogin = usuario.id;

  useEffect(() => {
    async function fetchData() {
      try {
        await buscar(`/usuarios/${idUsuarioLogin}`, setSeuUsuario, {
          headers: { Authorization: token },
        });
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        }
      }
    }

    fetchData();
  }, [idUsuarioLogin, token]);

  // Utilizando useMemo para memoizar o contexto
  const contextValue = useMemo(() => {
    return { usuario, handleLogin, handleLogout, isLoading, seuUsuario };
  }, [usuario, handleLogin, handleLogout, isLoading, seuUsuario]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
