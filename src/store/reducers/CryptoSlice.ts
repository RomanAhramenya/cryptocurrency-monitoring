
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICryptoAssets } from '../../models/ICryptoAssets';
import { IHistory } from '../../models/IHistory';
import { fetchCrypto } from './CryptoAction';
import { fetchHistory } from './HistoryActions';

interface ICryptoState {
    crypto:{
        [key:string]:ICryptoAssets
    }
    isLoading:boolean;
    error:string
}

const initialState: ICryptoState = {
    crypto:{} ,
    isLoading:false,
    error:''
}
interface IAction {
    id:string,
    name:ICryptoAssets
}
export const HistorySlice = createSlice({
    name:'crypto',
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [fetchCrypto.fulfilled.type] : (state,action : PayloadAction<IAction>) => {
            state.isLoading = false;
            state.error = '';
            state.crypto[action.payload.id] = action.payload.name
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