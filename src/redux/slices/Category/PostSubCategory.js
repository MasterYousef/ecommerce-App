import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useInsertData} from '../../../hooks/useInsertData'
export const PostSubCategory = createAsyncThunk('category/PostSubCategory',async (RowData,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData('/api/v1/subcategories',RowData);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data.status)
    }

})
const initialState = {
    Loading:false,
    error:[]
}
const PostAllSubCategory = createSlice({
    name:'PostAllSubCategory',
    initialState,
    extraReducers:{
        [PostSubCategory.pending]:(state,action)=>{
            state.Loading = true;
        },
        [PostSubCategory.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload.statusText
        },
        [PostSubCategory.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default PostAllSubCategory.reducer