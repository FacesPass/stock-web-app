import React, { lazy } from 'react'
import { Redirect } from 'react-router'

const Stock = lazy(() => import('../pages/stock'))
const Trade = lazy(() => import('../pages/trade'))
const Property = lazy(() => import('../pages/property'))

export const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/stock' />
  },
  {
    path: '/stock',
    exact: true,
    component: Stock,
  },
  {
    path: '/trade',
    exact: true,
    component: Trade
  },
  {
    path: '/property',
    exact: true,
    component: Property
  },
  {
    path: '*',
    component: Stock
  }
]