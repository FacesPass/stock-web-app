import React, { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

import './index.less'
import { Button } from 'antd';
echarts.use([GridComponent, LineChart, CanvasRenderer])

export default memo(function PropertyAnalyze() {

  useEffect(() => {
    const chartDom = document.getElementById('line-chart')
    const myChart = echarts.init(chartDom)
    myChart.setOption({
      xAxis: {
        name: '日期',
        type: 'category',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      },
      yAxis: {
        name: '累计收益率',
        type: 'value'
      },
      series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
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
