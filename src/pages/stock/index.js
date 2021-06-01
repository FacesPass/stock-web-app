import React, { memo, useState } from 'react'
import { Button, Table } from 'antd'
import AddStockModal from './child-cpns/add-stock-modal'

import './index.less'
import trade from '@/assets/img/trade.png'

const dataSource = [
  {
    key: '1',
    name: '股票1',
    scale: '162.79',
    hold: 60,
    latestPrice: 32,
    today: '5%',
  }, {
    key: '2',
    name: '股票2',
    scale: '162.79',
    hold: 60,
    latestPrice: 32,
    today: '5%',
  }
];

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '规模',
    dataIndex: 'scale',
    key: 'scale'
  },
  {
    title: '持有率',
    dataIndex: 'hold',
    key: 'hold'
  },
  {
    title: '最新价',
    dataIndex: 'latestPrice',
    key: 'latestPrice'
  },
  {
    title: '今日涨跌',
    dataIndex: 'today',
    key: 'today'
  },
];

export default memo(function Stock(props) {
  const [visible, setVisible] = useState(false)

  function handleVisible() {
    setVisible(true)
  }

  function handleCancel() {
    setVisible(false)
  }

  function handleOk() {

  }

  return (
    <div className='stock'>
      <div className='header'>
        <img src={trade} className='trade-img' alt=''></img>
        <h2 className='desc'>开始交易</h2>
        <Button
          type="primary"
          className='add-stock'
          onClick={handleVisible}
        >添加股票</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />

      <AddStockModal
        visible={visible}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  )
})
