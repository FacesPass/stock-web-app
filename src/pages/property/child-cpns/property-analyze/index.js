import React, { memo, useEffect } from 'react'
import * as echarts from 'echarts'
import { Button } from 'antd'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import './index.less'

echarts.use([GridComponent, LineChart, CanvasRenderer])

export default memo(function PropertyAnalyze() {
  useEffect(() => {
    const chartDom = document.getElementById('line-chart')
    const myChart = echarts.init(chartDom)
    const data = {
      x: ['2021/05/30', '2021/05/31', '2021/06/01', '2021/06/02'],
      y: [50, -15, 2.5, 10]
    }
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

  function handleDate(date) {

  }

  return (
    <div className='property-analyze'>
      <div className='controler'>
        <Button onClick={() => handleDate(7)}>7天</Button>
        <Button onClick={() => handleDate(30)}>30天</Button>
        <Button onClick={() => handleDate(90)}>3个月</Button>
        <Button onClick={() => handleDate(180)}>6个月</Button>
      </div>
      <div id='line-chart'></div>
    </div>
  )
})
