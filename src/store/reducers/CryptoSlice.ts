
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICryptoAssets } from '../../models/ICryptoAssets';
import { IHistory } from '../../models/IHistory';
import { fetchCrypto } from './CryptoAction';
import { fetchHistory } from './HistoryActions';

interface ICryptoState {
    crypto:ICryptoAssets
    isLoading:boolean;
    error:string
}

const initialState: ICryptoState = {
    crypto:{
        id: '',
        rank:'',
        symbol:'',
        name:'',
        supply:'',
        maxSupply:'',
        marketCapUsd:'',
        volumeUsd24Hr:'',
        priceUsd:'',
        changePercent24Hr:'',
        vwap24Hr:'',
    } ,
    isLoading:false,
    error:''
}

export const HistorySlice = createSlice({
    name:'crypto',
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [fetchCrypto.fulfilled.type] : (state,action : PayloadAction<ICryptoAssets>) => {
            state.isLoading = false;
            state.error = '';
            state.crypto = action.payload
        },
        [fetchCrypto.pending.type] : (state) => {
            state.isLoading = true;
          
        },
        [fetchCrypto.rejected.type] : (state,action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
           
        },
        
    }
})

export default HistorySlice.reducer