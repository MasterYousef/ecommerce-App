import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useInsertDataWithImg} from '../../../hooks/useInsertData'
export const PostCategory = createAsyncThunk('category/PostCategory',async (FormData,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertDataWithImg('/api/v1/categories',FormData);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data.status)
    }

})
const initialState = {
    Loading:false,
    error:[]
}
const PostAllCategory = createSlice({
    name:'PostAllCategory',
    initialState,
    extraReducers:{
        [PostCategory.pending]:(state,action)=>{
            state.Loading = true;
        },
        [PostCategory.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload.statusText
        },
        [PostCategory.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default PostAllCategory.reducer