import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICryptoAssets } from '../../models/ICryptoAssets';
interface IParams{
    limit:string
    offset:string
}
export const fetchAssets = createAsyncThunk(
    'user/fetchAssets',
    async (arg:IParams,thunkAPI) => {
        try {
            const response = await axios.get<any>(`https://api.coincap.io/v2/assets?limit=${arg.limit}&offset=${arg.offset}`).then(response=>{
                return response.data
            })
            return response.data
            
        }
        catch (e) {
            return thunkAPI.rejectWithValue('что то пошло не так')
        }
    }
)

export const fetchAssetsAll = createAsyncThunk(
    'user/fetchAssetsAll',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get<any>(`https://api.coincap.io/v2/assets?limit=2000&offset=0`).then(response=>{
                return response.data
            })
            return response.data
            
        }
        catch (e) {
            return thunkAPI.rejectWithValue('что то пошло не так')
        }
    }
)
