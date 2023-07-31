import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import useGetData from '../../../hooks/useGetData'
export const search = createAsyncThunk('Product/search',async (url,thunkAPI)=>{
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
    Loading:true,
    error:''
}
const SearchProducts = createSlice({
    name:'GetAllProducts',
    initialState,
    extraReducers:{
        [search.pending]:(state)=>{
            state.Loading = true;
        },
        [search.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.Products = action.payload;
        },
        [search.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default SearchProducts.reducer