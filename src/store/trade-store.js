import { makeAutoObservable } from 'mobx'


export class TradeStore {
  constructor() {
    makeAutoObservable(this)
  }

  tradeData = {
    volume: '',
    value: ''
  }

  setTradeData = (tradeData) => {
    this.tradeData = tradeData
  }
}