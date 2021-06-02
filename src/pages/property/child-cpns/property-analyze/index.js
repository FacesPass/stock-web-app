import React, { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import './index.less'
import { Button } from 'antd'
echarts.use([GridComponent, LineChart, CanvasRenderer])

export default memo(function PropertyAnalyze() {
  const data = {
    x: ['2021/05/30', '2021/05/31', '2021/06/01', '2021/06/02'],
    y: [50, -15, 2.5, 10]
  }

  useEffect(() => {
    const chartDom = document.getElementById('line-chart')
    const myChart = echarts.init(chartDom)
    myChart.setOption({
      xAxis: {
        name: '日期',
        type: 'category',
        data: data.x
      },
      yAxis: {
        name: '累计收益率(%)',
        type: 'value',
        data: data.y
      },
      series: [
        {
          name: '累计收益率(%)：',
          data: data.y,
          type: 'line'
        }],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#333'
          }
        }
      }
    })
  }, [])

  return (
    <div className='property-analyze'>
      <div className='controler'>
        <Button>7天</Button>
        <Button>30天</Button>
        <Button>3个月</Button>
        <Button>6个月</Button>
      </div>
      <div id='line-chart'></div>
    </div>
  )
})
