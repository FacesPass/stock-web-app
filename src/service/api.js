import request from './index'

/**获取用户的股票列表 */
export function fetchStockList(pageIndex, pageSize) {
  return request.get('/trade/web/query')
}

/**获取模拟仓账户的资产信息 */
export function fetchMoney(id) {
  return request.get('/trade/web/money')
}

/**获取特定股票持有情况 */
export function fetchStock(stockCode) {
  return request.post('/trade/web/querystock')
}

/**模拟仓卖出股票 */
export function buyStock() {
  return request.get('/trade/web/add')
}