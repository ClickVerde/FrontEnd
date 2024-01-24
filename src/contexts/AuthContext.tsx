import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
// import { toastAlerta } from "../utils/toastAlerta"

interface AuthContextProps {
    email: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [email, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        email: "",
        senha: "",
        foto: "",
        cpf_cnpj: "",
        tipo: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            alert("Usuário logado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
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
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ email, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}