import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useInsertDataWithImg} from '../../../hooks/useInsertData'
export const PostBrands = createAsyncThunk('brand/PostBrand',async (FormData,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertDataWithImg('/api/v1/brands',FormData);
        return respon
    }catch(err){
        return rejectWithValue(err.message)
    }

})
const initialState = {
    Loading:false,
    error:false
}
const PostAllBrand = createSlice({
    name:'PostAllBrand',
    initialState,
    extraReducers:{
        [PostBrands.pending]:(state,action)=>{
            state.Loading = true;

        },
        [PostBrands.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.error = false
        },
        [PostBrands.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default PostAllBrand.reducer