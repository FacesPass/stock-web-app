import React, { useState } from 'react'
import { Button, Table, Modal, Form, Input, message } from 'antd'
import { addStock } from '@/service/api'
import { useUserStore, useStockStore } from '../../store'

import './index.less'
import trade from '@/assets/img/trade.png'
import { observer } from 'mobx-react-lite'

const { Item } = Form


const columns = [
  {
    title: '名称',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: '规模',
    dataIndex: 'volume',
    key: 'volume'
  },
  {
    title: '持有率',
    dataIndex: 'holdingRate',
    key: 'holdingRate',
    render: (val, record) => {
      return (
        <div>{val * 100}%</div>
      )
    }
  },
  {
    title: '最新价',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '今日涨跌',
    dataIndex: 'upsAnddowns',
    key: 'upsAnddowns',
    render: (val, record) => {
      return (
        <div>{val * 100}%</div>
      )
    }
  },
];

export default observer(function Stock(props) {
  const [visible, setVisible] = useState(false)
  const [stockId, setStockId] = useState('')

  const { userId } = useUserStore()
  const { getStockList, setStockList } = useStockStore()

  function handleVisible() {
    setVisible(true)
  }

  function handleCancel() {
    setVisible(false)
  }

  function handleStockIdChange(e) {
    setStockId(e.target.value)
  }

  async function handleOk() {
    const res = await addStock(userId, stockId)
    res.data.forEach((item, index) => {
      item.key = index
    })
    setStockList(res.data)
    setStockId('')
    setVisible(false)
    message.success('添加股票成功')
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
      <Table dataSource={getStockList()} columns={columns} />


      <Modal
        visible={visible}
        title='添加股票'
        okText='确定'
        cancelText='关闭'
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form>
          <Item label='输入股票ID'>
            <Input value={stockId} onChange={e => handleStockIdChange(e)} />
          </Item>
        </Form>
      </Modal>
    </div>
  )
})
