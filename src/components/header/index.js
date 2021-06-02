import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import './index.less'

export default memo(function Header() {
  return (
    <div className='header'>
      <div className='left'></div>
      <div className='center'>
        <NavLink to='/stock' className='link' activeClassName='active'>股票</NavLink>
        <NavLink to='/trade' className='link' activeClassName='active'>交易</NavLink>
        <NavLink to='/property' className='link' activeClassName='active'>资产</NavLink>
      </div>
      <div className='right'></div>
    </div>
  )
})
