
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICryptoAssets } from "../../models/ICryptoAssets";
import { fetchAssets } from './CryptoAssetsAction';

interface CryptoAssetsState {
    assets:ICryptoAssets[];
    isLoading:boolean;
    error:string
}

const initialState: CryptoAssetsState = {
    assets:[] ,
    isLoading:false,
    error:''
}

export const cryptoAssetsSlice = createSlice({
    name:'assets',
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [fetchAssets.fulfilled.type] : (state,action : PayloadAction<ICryptoAssets[]>) => {
            state.isLoading = false;
            state.error = '';
            state.assets = action.payload
        },
        [fetchAssets.pending.type] : (state) => {
            state.isLoading = true;
          
        },
        [fetchAssets.rejected.type] : (state,action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
           
        },
        
    }
})

export default cryptoAssetsSlice.reducer