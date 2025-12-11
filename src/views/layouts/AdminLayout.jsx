import { ViewLoader } from '@components'
import { routes } from '@routes/private'
import { Link } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
      <h1>Admin Layout</h1>

      <Link to="/admin">Home</Link>
      <br />
      <Link to="/admin/users">Users</Link>
      <br />
      <Link to="/">Login</Link>
      <br />
      <Link to="/logoff">Logoff</Link>
      <br />
      <br />
      <Link to="/pagina-nao-encontrada">404</Link>
      <ViewLoader routes={routes} />
    </>
  )
}
