import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import useGetData from '../../../hooks/useGetData'
export const GetProduct = createAsyncThunk('Product/GetProduct',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetData(`/api/v1/products/${id}`);
        return respon.data
    }catch(err){
        return rejectWithValue(err.message)
    }

})
const initialState = {
    Product:[],
    Loading:true,
    error:''
}
const GetOneProduct = createSlice({
    name:'GetAllProducts',
    initialState,
    extraReducers:{
        [GetProduct.pending]:(state)=>{
            state.Loading = true;
        },
        [GetProduct.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.Product = action.payload;
        },
        [GetProduct.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default GetOneProduct.reducer