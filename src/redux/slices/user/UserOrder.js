import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import useGetDataByToken from '../../../hooks/useGetDataByToken';
export const GetUserOrder = createAsyncThunk('Address/PostAddress',async (obj,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetDataByToken(`/api/v1/order?sort=-createdAt&limit=${obj.limit}&page=${obj.page}`);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
const initialState = {
    GetData:[],
    Loading:''
}
const UserOrderSlice = createSlice({
    name:'UserOrderSlice',
    initialState,
    extraReducers:{
        [GetUserOrder.pending]:(state,action)=>{
            state.GetData = action.payload
            state.Loading = true
        },
        [GetUserOrder.rejected]:(state,action)=>{
            state.GetData = action.payload
            state.Loading = false
        },[GetUserOrder.fulfilled]:(state,action)=>{
            state.GetData = action.payload
            state.Loading = false
        },
    }
})
export default UserOrderSlice.reducer