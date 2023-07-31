import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useInsertData} from '../../../hooks/useInsertData'
import useGetDataByToken from '../../../hooks/useGetDataByToken';
import {useUpdateData} from '../../../hooks/useUpdateData'
import useGetCardOrder from '../../../hooks/useGetCardOrder';
export const PostOrder = createAsyncThunk('Address/PostAddress',async (obj,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData(`/api/v1/orders/${obj.id}`,obj.data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const GetAdminOrder = createAsyncThunk('Address/GetAdminOrder',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetDataByToken(`/api/v1/orders/${id}`);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const UpdateAdminOrder = createAsyncThunk('Address/PostAddress',async (url,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateData(url);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const GetCardOrder = createAsyncThunk('Address/GetCardOrder',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetCardOrder(`/api/v1/orders/checkout-session/${id}`)
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
const initialState = {
    PostData:[],
    GetData:[],
    CardData:[],
    EditData:[],
    Loading:''
}
const OrderSlice = createSlice({
    name:'CashOrderSlice',
    initialState,
    extraReducers:{
        [PostOrder.rejected]:(state,action)=>{
            state.PostData = action.payload
        },[PostOrder.fulfilled]:(state,action)=>{
            state.PostData = action.payload
        },
        [GetAdminOrder.pending]:(state,action)=>{
            state.GetData = action.payload
            state.Loading = true
        },
        [GetAdminOrder.rejected]:(state,action)=>{
            state.GetData = action.payload
            state.Loading = false
        },[GetAdminOrder.fulfilled]:(state,action)=>{
            state.GetData = action.payload
            state.Loading = false
        },
        [UpdateAdminOrder.rejected]:(state,action)=>{
            state.EditData = action.payload
        },[UpdateAdminOrder.fulfilled]:(state,action)=>{
            state.EditData = action.payload
        },
        [GetCardOrder.rejected]:(state,action)=>{
            state.CardData = action.payload
            console.log(action.payload);
        },[GetCardOrder.fulfilled]:(state,action)=>{
            state.CardData = action.payload
        },
    }
})
export default OrderSlice.reducer