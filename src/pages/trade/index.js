import React, { useEffect, useState } from 'react'
import { Button, Input, Form, message } from 'antd'
import { fetchStock, editStock, sellStock, buyStock } from '../../service/api'
import { useTradeStore, useUserStore } from '../../store'
import { observer } from 'mobx-react-lite'
import { createForm, onFieldInputValueChange, onFormSubmit } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Form as FormilyForm, FormItem, NumberPicker } from '@formily/antd'
import { fetchMoney } from '../../service/api'
import { usePropertyStore } from '../../store'

import './index.less'

const { Item } = Form

export default observer(function Trade() {
  const [isSearch, setIsSearch] = useState(false)
  const [stockId, setStockId] = useState()
  const { property, setProperty } = usePropertyStore()
  const { userId } = useUserStore()
  const { setTradeData, tradeData } = useTradeStore()

  let action

  const form = createForm({
    effects() {
      onFieldInputValueChange('price', (field) => {
        form.setFieldState('total', (state) => {
          const count = form.values.count
          if (count === undefined) return
          state.value = field.value * count
        })
      })
      onFieldInputValueChange('count', (field) => {
        form.setFieldState('total', (state) => {
          const price = form.values.price
          if (price === undefined) return
          state.value = field.value * price
        })
      })
      onFieldInputValueChange('total', (field) => {
        if (field.value === undefined) return
        form.setFieldState('count', (state) => {
          const price = form.values.price
          if (!price) return
          state.value = field.value / price
        })
        form.setFieldState('price', (state) => {
          const count = form.values.count
          if (!count) return
          state.value = field.value / count
        })
      })
      onFormSubmit(async (form) => {
        console.log(form.values)
        console.log(action)
        if (!form.values.price || !form.values.count) {
          message.destroy()
          message.warning('????????????????????????')
          return
        }
        const { price, count } = form.values
        if (action === 'buy') {
          const res = await buyStock(stockId, userId, price, count)
          console.log(res)
          if (res.status === 'SUCCESS') {
            message.info(res.message)
            fetchMondyInfo()
            handleSearch()
          }
        }

        if (action === 'sell') {
          const res = await sellStock(stockId, userId, price, count)
          console.log(res)
          if (res.status === 'SUCCESS') {
            message.info(res.message)
            fetchMondyInfo()
            handleSearch()
          }
        }
      })
    },
  })

  const SchemaField = createSchemaField({
    components: {
      FormItem,
      NumberPicker,
    },
  })

  useEffect(() => {
    fetchMondyInfo()
  }, [])

  async function fetchMondyInfo() {
    const res = await fetchMoney(userId)
    console.log(res)
    if (res.status === 'SUCCESS') {
      setProperty(res.data)
    }
  }

  async function handleSearch() {
    if (!stockId) {
      message.warning('?????????????????????')
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
      message.success('????????????')
      handleSearch()
    }
  }

  async function handleBuy() {
    action = 'buy'
    form.submit()
  }

  async function handleSell() {
    action = 'sell'
    form.submit()
  }

  return (
    <div className='trade'>
      <div className='add-stock-id'>
        <Input
          value={stockId}
          onChange={e => handleStockChange(e)}
          placeholder='??????????????????ID'
          className='ipt' />
        <Button onClick={handleSearch} type='primary' className='btn'>????????????</Button>
      </div>

      {
        isSearch &&
        <>
          <div className='panal'>
            <div className='left'>
              <h2 className='title'>????????????</h2>
              <FormilyForm form={form}>
                <SchemaField>
                  <SchemaField.Number
                    name="price"
                    title="??????"
                    x-component="NumberPicker"
                    x-decorator="FormItem"
                  />
                  <SchemaField.Number
                    name="count"
                    title="??????"
                    x-component="NumberPicker"
                    x-decorator="FormItem"
                  />
                  <SchemaField.Number
                    name="total"
                    title="??????"
                    x-component="NumberPicker"
                    x-decorator="FormItem"
                  />
                </SchemaField>
              </FormilyForm>
            </div>
            <div className='right'>
              <h2 className='title'>{tradeData.stockName}-??????????????????</h2>
              <Form>
                <Item label='??????'>
                  <Input
                    value={tradeData.value}
                    className='ipt'
                    onChange={e => handlePriceChange(e)}
                  />
                </Item>
                <Item label='??????'>
                  <Input
                    value={tradeData.volume}
                    className='ipt'
                    onChange={e => handleCountChange(e)}
                  />
                </Item>
                <Item label='??????????????????'>
                  <div>{tradeData?.total}</div>
                </Item>
                <Item label='???????????????'>
                  <div>{property?.totalAccount} ?????????/??????</div>
                </Item>
                <Item>
                  <Button shape='round' onClick={handleEdit}>??????</Button>
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
            >??????
            </Button>
            <Button
              size='large'
              shape='round'
              type='primary'
              danger
              className='sell'
              onClick={handleSell}
            >
              ??????
            </Button>
          </div>
        </>
      }
    </div>
  )
})
