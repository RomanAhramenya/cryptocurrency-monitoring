import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchCrypto = createAsyncThunk(
    'user/fetchCrypto',
    async (name:string,thunkAPI) => {
        try {
            const response = await axios.get<any>(`https://api.coincap.io/v2/assets/${name}`).then(response=>{
                return response.data
            })
            return response.data
            
        }
        catch (e) {
            return thunkAPI.rejectWithValue('что то пошло не так')
        }
    }
)