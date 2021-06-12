import React, { memo, useEffect } from 'react'
import { Table } from 'antd'
import { fetchMoney } from '@/service/api'
import { observer } from 'mobx-react-lite'
import { useUserStore, usePropertyStore } from '../../../../store'

import './index.less'

const columns = [
  {
    title: '名称',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: '单价',
    dataIndex: 'value',
    key: 'value'
  },
  {
    title: '数量',
    dataIndex: 'volume',
    key: 'volume'
  },
  {
    title: '总价',
    dataIndex: 'total',
    key: 'total'
  }
];



export default observer(function PropertyTotal() {

  const { userId } = useUserStore()
  const { property, setProperty } = usePropertyStore()

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

  return (
    <>
      <div className='property-total'>
        <div className='left'>
          <div className='total-money'>
            <h2 className='title'>总资产估值</h2>
            <div className='money'>{property.totalAccount} 人民币/美元</div>
          </div>
          <div className='distribution'>
            <h2 className='title'>资产分布</h2>
            <div className='line'></div>
            <div className='account'>
              <div className='title'>资产账户：</div>
              <div className='money'>{property.fundAccount} 人民币/美元</div>
            </div>
            <div className='account'>
              <div className='title'>交易账户：</div>
              <div className='money'>{property.transactionAccount} 人民币/美元</div>
            </div>
          </div>
        </div>
        <div className='right'>预留坑位</div>
      </div>
      <Table dataSource={property.money} columns={columns} />
    </>
  )
})
