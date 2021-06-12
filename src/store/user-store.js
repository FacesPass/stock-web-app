import { makeAutoObservable } from 'mobx'


export class UserStore {
  constructor() {
    makeAutoObservable(this)
  }

  userId = 1

  getUserId() {
    return this.userId
  }

  setUserId(id) {
    this.userId = id
  }

  // setUserInfo(userInfo) {
  //   this.userInfo = userInfo
  // }
}