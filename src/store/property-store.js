import { makeAutoObservable } from 'mobx'


export class PropertyStore {
  constructor() {
    makeAutoObservable(this)
  }

  property = {
    fundAccount: 0,
    totalAccount: 0,
    transactionAccount: 0,
    money: []
  }

  setProperty = (property) => {
    this.property = property
  }
}