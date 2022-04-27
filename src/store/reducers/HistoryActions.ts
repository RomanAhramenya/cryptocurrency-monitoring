import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface IParam {
    name:string,
    id:string
}
export const fetchHistory = createAsyncThunk(
    'user/fetchHistory',
    async (arg:IParam,thunkAPI) => {
        try {
            const response = await axios.get<any>(`https://api.coincap.io/v2/assets/${arg.name}/history?interval=d1`).then(response=>{
                return response.data
            })
            return {
                id:arg.id,
                name:response.data
            }
                
            
            
        }
        catch (e) {
            return thunkAPI.rejectWithValue('что то пошло не так')
        }
    }
)