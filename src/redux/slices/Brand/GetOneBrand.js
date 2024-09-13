import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import useGetData from '../../../hooks/useGetData'
export const GetOneBr = createAsyncThunk('Brand/GetOneBr',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetData(`/api/v1/brand/${id}`);
        return respon.data
    }catch(err){
        return rejectWithValue(err.message)
    }

})
const initialState = {
    brand:[],
    Loading:true,
    error:''
}
const GetOneBrand = createSlice({
    name:'GetOneBrand',
    initialState,
    extraReducers:{
        [GetOneBr.pending]:(state)=>{
            state.Loading = true;
        },
        [GetOneBr.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.brand = action.payload;
        },
        [GetOneBr.rejected]:(state,action)=>{
            state.Loading = false;
            state.error = action.payload
        }
    }
})
export default GetOneBrand.reducer