import React, { memo } from 'react'
import { Modal, Form, Input } from 'antd'
const { Item } = Form

export default memo(function AddStockModal(props) {
  const { visible, handleCancel, handleOk } = props
  return (
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
          <Input />
        </Item>
      </Form>
    </Modal>
  )
})
