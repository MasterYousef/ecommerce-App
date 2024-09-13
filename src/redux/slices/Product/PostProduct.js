import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useInsertDataWithImg} from '../../../hooks/useInsertData'
export const PostProduct = createAsyncThunk('Product/PostProduct',async (FormData,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertDataWithImg('/api/v1/product',FormData);
        return respon
    }catch(err){
        console.log(err);
        
        return rejectWithValue(err.message)
    }

})
const initialState = {
    Loading:'',
    error:""
}
const PostAllProduct = createSlice({
    name:'PostAllProduct',
    initialState,
    extraReducers:{
        [PostProduct.pending]:(state,action)=>{
            state.Loading = true;
        },
        [PostProduct.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.error = false
        },
        [PostProduct.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = true
        }
    }
})
export default PostAllProduct.reducer