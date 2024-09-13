import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useUpdateDataWithImg} from '../../../hooks/useUpdateData'
export const EditProduct = createAsyncThunk('Product/EditProduct',async (par,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateDataWithImg(`/api/v1/product/${par.id}`,par.formData);
        return respon
    }catch(err){
        return rejectWithValue(err.message)
    }

})
const initialState = {
    Loading:'',
    error:false
}
const UpdateProduct = createSlice({
    name:'UpdateProduct',
    initialState,
    extraReducers:{
        [EditProduct.pending]:(state,action)=>{
            state.Loading = true;
        },
        [EditProduct.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.error = false
        },
        [EditProduct.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default UpdateProduct.reducer