import React, { memo, Suspense } from 'react'
import { HashRouter } from "react-router-dom"
import { Spin } from 'antd'
import { renderRoutes } from "react-router-config"
import { routes } from './router'

import Header from '@/components/header'

export default memo(function App() {
  return (
    <HashRouter>
      <Header />
      <div className='panal'>
        <Suspense fallback={<Spin className="spin-loading" />}>
          {renderRoutes(routes)}
        </Suspense>
      </div>
    </HashRouter>
  )
})
