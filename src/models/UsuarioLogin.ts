export default interface UsuarioLogin {
  id: number;
  nome: string;
  email: string;
  senha: string;
  foto: string;
  cpf_cnpj: string;
  tipo: string;
  token: string;
}