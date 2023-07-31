import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import useGetData from '../../../hooks/useGetData'
export const GetCategory = createAsyncThunk('category/GetCategory',async (url,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetData(url);
        return respon.data
    }catch(err){
        return rejectWithValue(err.message)
    }

})
const initialState = {
    Category:[],
    Loading:true,
    error:''
}
const GetAllCategory = createSlice({
    name:'GetAllCategory',
    initialState,
    extraReducers:{
        [GetCategory.pending]:(state,action)=>{
            state.Loading = true;
        },
        [GetCategory.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.Category = action.payload;
        },
        [GetCategory.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default GetAllCategory.reducer
