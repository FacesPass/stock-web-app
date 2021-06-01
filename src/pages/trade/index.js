import React, { memo } from 'react'
import { Button, Input, Form } from 'antd'

import './index.less'

const { Item } = Form

export default memo(function Trade() {
  return (
    <div className='trade'>
      <div className='add-stock-id'>
        <Input placeholder='请输入股票的ID' className='ipt' />
        <Button type='primary' className='btn'>添加股票ID</Button>
      </div>

      <div className='panal'>
        <div className='left'>
          <h2 className='title'>限价委托</h2>
          <Form>
            <Item label='价格'>
              <Input className='ipt' />
            </Item>
            <Item label='数量'>
              <Input className='ipt' />
            </Item>
            <Item label='金额'>
              <Input className='ipt' />
            </Item>
          </Form>
        </div>
        <div className='right'>
          <h2 className='title'>股票持有情况</h2>
          <Form>
            <Item label='价格'>
              <Input className='ipt' />
            </Item>
            <Item label='数量'>
              <Input className='ipt' />
            </Item>
            <Item label='金额'>
              <Input className='ipt' />
            </Item>
            <Item label='股票现有情况'>
              <div>1000元</div>
            </Item>
          </Form>
        </div>
      </div>

      <div className='btn-group'>
        <Button size='large' shape='round' type='primary' className='buy'>买入</Button>
        <Button size='large' shape='round' type='primary' danger className='sell'>卖出</Button>
      </div>
    </div>
  )
})
