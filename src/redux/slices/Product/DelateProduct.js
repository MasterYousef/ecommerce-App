import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import useDeleteData from '../../../hooks/useDeleteData'
export const DelateProduct = createAsyncThunk('Product/DelateProduct',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useDeleteData(`/api/v1/product/${id}`);
        return respon.data
    }catch(err){
        return rejectWithValue(err.message)
    }

})
const initialState = {
    Loading:"",
    error:''
}
const DelateOneProduct = createSlice({
    name:'DelateOneProduct',
    initialState,
    extraReducers:{
        [DelateProduct.pending]:(state)=>{
            state.Loading = true;
        },
        [DelateProduct.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.error = false
        },
        [DelateProduct.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = true            
        }
    }
})
export default DelateOneProduct.reducer