import React, { useState } from 'react'
import { Button, Input, Form, message } from 'antd'
import { fetchStock, editStock, sellStock, buyStock } from '../../service/api'
import { useTradeStore, useUserStore } from '../../store'
import { observer } from 'mobx-react-lite'
// import { createForm, onFieldInputValueChange } from '@formily/core'
// import { createSchemaField, FormConsumer } from '@formily/react'
// import { Form as FormilyForm, FormItem, NumberPicker } from '@formily/antd'

import './index.less'

const { Item } = Form

export default observer(function Trade() {
  const [isSearch, setIsSearch] = useState(false)
  const [stockId, setStockId] = useState()
  const [leftPrice, setLeftPrice] = useState()
  const [leftCount, setLeftCount] = useState()
  const [leftTotal, setLeftTotal] = useState()

  const { userId } = useUserStore()
  const { setTradeData, tradeData } = useTradeStore()

  async function handleSearch() {
    if (!stockId) {
      message.warning('请填写股票代码')
    }
    const res = await fetchStock(stockId, userId)
    console.log(res)
    if (res.status === "SUCCESS") {
      setIsSearch(true)
      setTradeData(res.data)
    }
  }

  function handleStockChange(e) {
    setStockId(e.target.value)
  }

  function handlePriceChange(e) {
    tradeData.value = e.target.value
  }

  function handleCountChange(e) {
    tradeData.volume = e.target.value
  }

  async function handleEdit() {
    const params = {
      stockCode: stockId,
      userId: userId,
      value: tradeData.value,
      volume: tradeData.volume
    }
    const res = await editStock(params)
    if (res.status === "SUCCESS") {
      message.success('修改成功')
    }
  }

  function handleLeftPrice(e) {
    setLeftPrice(e.target.value)
  }

  function handleLeftCount(e) {
    setLeftCount(e.target.value)
  }

  function handleLeftTotal(e) {
  }

  async function handleBuy() {
    const res = await buyStock(stockId, userId, leftPrice, leftCount)
    console.log(res)
    if (res.status === 'SUCCESS') {
      message.success('买入成功')
    }
  }

  async function handleSell() {
    const res = await sellStock(stockId, userId, leftPrice, leftCount)
    console.log(res)
    if (res.status === 'SUCCESS') {
      message.success('卖出成功')
    }
  }

  return (
    <div className='trade'>
      <div className='add-stock-id'>
        <Input
          value={stockId}
          onChange={e => handleStockChange(e)}
          placeholder='请输入股票的ID'
          className='ipt' />
        <Button onClick={handleSearch} type='primary' className='btn'>查看股票</Button>
      </div>

      {
        isSearch &&
        <>
          <div className='panal'>
            <div className='left'>
              <h2 className='title'>限价委托</h2>
              <Form>
                <Item label='价格'>
                  <Input value={leftPrice} onChange={e => handleLeftPrice(e)} className='ipt' />
                </Item>
                <Item label='数量'>
                  <Input value={leftCount} onChange={e => handleLeftCount(e)} className='ipt' />
                </Item>
                <Item label='金额'>
                  <Input
                    value={leftTotal}
                    onChange={e => handleLeftTotal(e)}
                    className='ipt'
                  />
                </Item>
              </Form>
            </div>
            <div className='right'>
              <h2 className='title'>股票持有情况-{tradeData.type}</h2>
              <Form>
                <Item label='价格'>
                  <Input
                    value={tradeData.value}
                    className='ipt'
                    onChange={e => handlePriceChange(e)}
                  />
                </Item>
                <Item label='数量'>
                  <Input
                    value={tradeData.volume}
                    className='ipt'
                    onChange={e => handleCountChange(e)}
                  />
                </Item>
                {/* <Item label='金额'>
                  <Input className='ipt' />
                </Item> */}
                <Item label='股票现有情况'>
                  <div>{tradeData?.total}</div>
                </Item>
                <Item>
                  <Button shape='round' onClick={handleEdit}>修改</Button>
                </Item>
              </Form>
            </div>
          </div>

          <div className='btn-group'>
            <Button
              size='large'
              shape='round'
              type='primary'
              className='buy'
              onClick={handleBuy}
            >买入
            </Button>
            <Button
              size='large'
              shape='round'
              type='primary'
              danger
              className='sell'
              onClick={handleSell}
            >
              卖出
            </Button>
          </div>
        </>
      }
    </div>
  )
})
