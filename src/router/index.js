import { Redirect } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('../pages/home'))

export const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      <Redirect to='/home' />
    }
  },
  {
    path: '/home',
    component: Home,
    routes: []
  },
  {},
]