import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import useGetData from '../../../hooks/useGetData'
export const GetSubCategory = createAsyncThunk('category/GetSubCategory',async (url,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetData(url);
        return respon.data
    }catch(err){
        return rejectWithValue(err.message)
    }

})
const initialState = {
    SubCategory:[],
    Loading:true,
    error:''
}
const GetAllSubCategory = createSlice({
    name:'GetAllSubCategory',
    initialState,
    extraReducers:{
        [GetSubCategory.pending]:(state,action)=>{
            state.Loading = true;
        },
        [GetSubCategory.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.SubCategory = action.payload;
        },
        [GetSubCategory.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default GetAllSubCategory.reducer