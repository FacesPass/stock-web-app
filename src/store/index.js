import { useContext, createContext } from 'react'
import { STOCK_STORE, USER_STORE, PROPERTY_STORE, TRADE_STORE } from './constants'
import { StockStore } from './stock-store'
import { TradeStore } from './trade-store'
import { PropertyStore } from './property-store'
import { UserStore } from './user-store'

//store列表
const createStore = () => ({
  [STOCK_STORE]: new StockStore(),
  [TRADE_STORE]: new TradeStore(),
  [PROPERTY_STORE]: new PropertyStore(),
  [USER_STORE]: new UserStore()
})

const stores = createStore()
const StoresContext = createContext(stores)
const useStore = () => useContext(StoresContext)

// export function 
export function useUserStore() {
  const { userStore } = useStore()
  return userStore
}

export function useStockStore() {
  const { stockStore } = useStore()
  return stockStore
}

export function usePropertyStore() {
  const { propertyStore } = useStore()
  return propertyStore
}

export function useTradeStore() {
  const { tradeStore } = useStore()
  return tradeStore
}