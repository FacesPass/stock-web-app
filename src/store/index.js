import { useContext, createContext } from 'react'
import { makeAutoObservable } from 'mobx'


//store列表
const createStore = () => ({

})

const stores = createStore()
const StoresContext = createContext(stores)
const useStore = useContext(StoresContext)

// export function 
