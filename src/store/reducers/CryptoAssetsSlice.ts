
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICryptoAssets } from "../../models/ICryptoAssets";
import { fetchAssets, fetchAssetsAll } from './CryptoAssetsAction';

interface CryptoAssetsState {
    assets:ICryptoAssets[];
    assetsAll:string[]
    isLoading:boolean;
    error:string
}

const initialState: CryptoAssetsState = {
    assets:[] ,
    assetsAll:[],
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
        [fetchAssetsAll.fulfilled.type] :(state,action:PayloadAction<ICryptoAssets[]>) => {
            state.isLoading = false;
            state.error = '';
            state.assetsAll = []
            action.payload.map(el=>{
                state.assetsAll.push(el.id)
            })
            
        },
        [fetchAssetsAll.pending.type] :(state) => {
            state.isLoading = true;
            
        },
        [fetchAssetsAll.rejected.type] :(state,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = '';
        },
    }
})

export default cryptoAssetsSlice.reducer