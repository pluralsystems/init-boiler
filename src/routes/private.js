import { lazy } from 'react'

const Users = lazy(() => import('../views/private/users'))
const Home = lazy(() => import('../views/private/home'))

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'fa-regular fa-house',
    Element: Home
  },
  {
    path: '/users',
    name: 'Users',
    icon: 'fa-solid fa-users',
    Element: Users,
    allowedUserRoles: ['turquesa-admin']
  }
]
