import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import useGetData from '../../../hooks/useGetData'
export const GetProducts = createAsyncThunk('Product/GetProducts',async (url,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetData(url);
        return respon.data
    }catch(err){
        return rejectWithValue(err.message)
    }

})
const initialState = {
    Products:[],
    Loading:"",
    error:''
}
const GetAllProducts = createSlice({
    name:'GetAllProducts',
    initialState,
    extraReducers:{
        [GetProducts.pending]:(state)=>{
            state.Loading = true;
        },
        [GetProducts.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.Products = action.payload;
        },
        [GetProducts.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default GetAllProducts.reducer