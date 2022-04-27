import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface IParams {
    id:string
    name:string
}
export const fetchCrypto = createAsyncThunk(
    'user/fetchCrypto',
    async (arg:IParams,thunkAPI) => {
        try {
            const response = await axios.get<any>(`https://api.coincap.io/v2/assets/${arg.name}`).then(response=>{
                return response.data
            })
            return {
                id:arg.id,
                name:response.data
            
            }
            
        }
        catch (e) {
            return thunkAPI.rejectWithValue('not correct data')
        }
    }
)