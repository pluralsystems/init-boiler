import { lazy } from 'react'

const Login = lazy(() => import('../views/public/login'))

const Logoff = lazy(() => import('../views/public/logoff'))
const ForgotPassword = lazy(() => import('../views/public/login/ForgotPassoword'))

export const routes = [
  { path: '/', Element: Login },
  {
    path: 'forgot-password',
    name: 'Forgot Password',
    Element: ForgotPassword
  },
  {
    path: 'logoff',
    name: 'Logoff',
    Element: Logoff
  }
]
