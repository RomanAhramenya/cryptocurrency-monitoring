
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHistory } from '../../models/IHistory';
import { fetchHistory } from './HistoryActions';

interface IHistoryState {
    history:{
        [key:string]:IHistory[]
    }
    isLoading:boolean;
    error:string
}

const initialState: IHistoryState = {
    history:{} ,
    isLoading:false,
    error:''
}
interface IActions{
    id:string
    name:IHistory[]
}
export const HistorySlice = createSlice({
    name:'history',
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [fetchHistory.fulfilled.type] : (state,action : PayloadAction<IActions>) => {
            state.isLoading = false;
            state.error = '';
            state.history[action.payload.id] = action.payload.name
            
        },
        [fetchHistory.pending.type] : (state) => {
            state.isLoading = true;
          
        },
        [fetchHistory.rejected.type] : (state,action : PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
           
        },
        
    }
})

export default HistorySlice.reducer