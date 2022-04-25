
import { configureStore } from "@reduxjs/toolkit";
import assetsReducer from './reducers/CryptoAssetsSlice'
import historyReducer from './reducers/HistorySlice'
import cryptoReducer from './reducers/CryptoSlice'
export const store = configureStore({
    reducer:{
        assets: assetsReducer,
        history: historyReducer,
        crypto:cryptoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch