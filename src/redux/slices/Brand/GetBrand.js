import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import useGetData from '../../../hooks/useGetData'
export const GetAllBrand = createAsyncThunk('brand/GetAllBrand',async (url,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetData(url);
        return respon.data
    }catch(err){
        return rejectWithValue(err.message)
    }
})
const initialState = {
    brand:[],
    loading:false,
    error:false
}
const GetBrand = createSlice({
    name:'GetBrand',
    initialState,
    extraReducers:{
        [GetAllBrand.pending]:(state,action)=>{
            state.Loading = true;
        },
        [GetAllBrand.fulfilled]:(state,action)=>{
            state.loading = false;
            state.brand = action.payload
        },
        [GetAllBrand.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default GetBrand.reducer