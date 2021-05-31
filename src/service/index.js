import axios from 'axios'
import { message } from 'antd'

const request = axios.create({
  timeout: 10000,
  timeoutErrorMessage: '请求接口超时'
})

request.interceptors.request.use(config => {
  return config
}, err => {
  message.error('接口请求错误')
  return Promise.reject(err)
})

request.interceptors.response.use(res => {
  return res.data
}, err => {
  message.error('接口响应错误')
  return Promise.reject(err)
})

export default request