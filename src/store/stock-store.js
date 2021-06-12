import { makeAutoObservable } from 'mobx'


export class StockStore {
  constructor() {
    makeAutoObservable(this)
  }

  stockList = []

  getStockList = () => {
    return this.stockList
  }

  setStockList = (stockList) => {
    this.stockList = stockList
  }
}