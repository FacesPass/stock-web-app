import React, { memo } from 'react'
import { Table } from 'antd'

import './index.less'

const dataSource = [
  {
    key: '1',
    name: '股票1',
    price: '162.79',
    count: 60,
    total: 999,
    cover: '5%',
  },
  {
    key: '1',
    name: '股票1',
    price: '162.79',
    count: 60,
    total: 999,
    cover: '5%',
  }, {
    key: '1',
    name: '股票1',
    price: '162.79',
    count: 60,
    total: 999,
    cover: '5%',
  }
];

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count'
  },
  {
    title: '总价',
    dataIndex: 'total',
    key: 'total'
  },
  {
    title: '补仓情况',
    dataIndex: 'cover',
    key: 'cover'
  },
];



export default memo(function PropertyTotal() {
  return (
    <>
      <div className='property-total'>
        <div className='left'>
          <div className='total-money'>
            <h2 className='title'>总资产估值</h2>
            <div className='money'>2222 人民币/美元</div>
          </div>
          <div className='distribution'>
            <h2 className='title'>资产分布</h2>
            <div className='line'></div>
            <div className='account'>
              <div className='title'>资产账户：</div>
              <div className='money'>220 人民币/美元</div>
            </div>
            <div className='account'>
              <div className='title'>交易账户：</div>
              <div className='money'>220 人民币/美元</div>
            </div>
          </div>
        </div>
        <div className='right'>预留坑位</div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
})
