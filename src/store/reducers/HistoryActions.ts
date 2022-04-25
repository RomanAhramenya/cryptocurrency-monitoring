import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchHistory = createAsyncThunk(
    'user/fetchHistory',
    async (name:string,thunkAPI) => {
        try {
            const response = await axios.get<any>(`https://api.coincap.io/v2/assets/${name}/history?interval=d1`).then(response=>{
                return response.data
            })
            return response.data
            
        }
        catch (e) {
            return thunkAPI.rejectWithValue('что то пошло не так')
        }
    }
)