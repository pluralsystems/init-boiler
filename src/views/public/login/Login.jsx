import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
      <h1>LOGIN</h1>
      <Link to="/admin">Logar</Link>
      <br />
      <Link to="/forgot-password">Esqueci minha senha</Link>
      <br />
      <hr />
      public route
    </>
  )
}
