import { useContext } from 'react'
import { makeAutoObservable } from 'mobx'


//store列表
const createStore = () => ({

})

const stores = createStore()

const useStore = useContext(stores)
