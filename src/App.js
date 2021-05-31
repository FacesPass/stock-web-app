import React, { memo, Suspense } from 'react'
import { HashRouter } from "react-router-dom"
import { Spin } from 'antd'
import { renderRoutes } from "react-router-config"
import { routes } from './router'

export default memo(function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Spin size="large" className="spin-loading" />}>
        {renderRoutes(routes)}
      </Suspense>
    </HashRouter>
  )
})
