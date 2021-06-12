import request from './index'


/** 首页增加自选股票 */
export function addStock(userId, stockId) {
  return request.get(`/trade/web/add/optional/stock?uid=${userId}&trade_id=${stockId}`)
}

/** 获取模拟仓账户的资产信息 */
export function fetchMoney(userId) {
  return request.post('/trade/web/money', {
    id: userId
  })
}

/** 获取特定股票持有情况 */
export function fetchStock(stockCode, userId) {
  return request.post('/trade/web/query/one/stock', {
    userId,
    stockCode
  })
}

/** 修改用户的股票 */
export function editStock(params) {
  return request.post('/trade/web/edit', {
    stockCode: params.stockCode,
    userId: params.userId,
    value: params.value,
    volume: params.volume
  })
}

/** 模拟仓卖出股票 */
export function sellStock(stockCode, userId, value, volume) {
  return request.post('/trade/web/del', {
    stockCode,
    userId,
    value,
    volume
  })
}

/** 模拟仓买入股票 */
export function buyStock(stockCode, userId, value, volume) {
  return request.post('/trade/web/add', {
    stockCode,
    userId,
    value,
    volume
  })
}