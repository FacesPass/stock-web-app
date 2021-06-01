import React, { memo } from 'react'
import { Tabs } from 'antd'
import PropertyTotal from './child-cpns/property-total'
import PropertyAnalyze from './child-cpns/property-analyze'

const { TabPane } = Tabs

export default memo(function Property() {
  return (
    <div className='property'>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='资产总览' key='1'>
          <PropertyTotal />
        </TabPane>
        <TabPane tab='资产分析' key='2'>
          <PropertyAnalyze />
        </TabPane>
      </Tabs>
    </div>
  )
})
