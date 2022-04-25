import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICryptoAssets } from '../../models/ICryptoAssets';
export const fetchAssets = createAsyncThunk(
    'user/fetchAssets',
    async (offset:string,thunkAPI) => {
        try {
            const response = await axios.get<any>(`https://api.coincap.io/v2/assets?limit=5&offset=${offset}`).then(response=>{
                return response.data
            })
            return response.data
            
        }
        catch (e) {
            return thunkAPI.rejectWithValue('что то пошло не так')
        }
    }
)

