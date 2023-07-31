import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useInsertData} from '../../../hooks/useInsertData'
import useGetDataByToken from '../../../hooks/useGetDataByToken';
import useDeleteData from '../../../hooks/useDeleteData';
import {useUpdateData} from '../../../hooks/useUpdateData'
export const PostCoupons = createAsyncThunk('Coupons/PostCoupons',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData("/api/v1/coupons",data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const GetCoupons = createAsyncThunk('Coupons/GetCoupons',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetDataByToken(`/api/v1/coupons?limit=2&page=${data}`)
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const DeleteCoupons = createAsyncThunk('Coupons/DeleteCoupons',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useDeleteData(`/api/v1/coupons/${id}`)
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const EditCoupons = createAsyncThunk('Coupons/EditCoupons',async (obj,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateData(`/api/v1/coupons/${obj.id}`,obj.data)
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
const initialState = {
    Loading:'',
    PostData:[],
    GetRes:[],
    DeleteCop:[],
    UpDateRes:[]
}
const CouponsSlice = createSlice({
    name:'CouponsSlice',
    initialState,
    extraReducers:{
        [PostCoupons.pending]:(state,action)=>{
            state.Loading = true;
        },
        [PostCoupons.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.PostData = action.payload
        },
        [PostCoupons.rejected]:(state,action)=>{
            state.Loading = false;
            state.PostData = action.payload
        },[GetCoupons.fulfilled]:(state,action)=>{
            state.GetRes = action.payload
        },
        [GetCoupons.rejected]:(state,action)=>{
            state.GetRes = action.payload
        },
        [DeleteCoupons.fulfilled]:(state,action)=>{
            state.DeleteCop = action.payload
        },
        [DeleteCoupons.rejected]:(state,action)=>{
            state.DeleteCop = action.payload
        },
        [EditCoupons.fulfilled]:(state,action)=>{
            state.UpDateRes = action.payload
        },
        [EditCoupons.rejected]:(state,action)=>{
            state.UpDateRes = action.payload
        }
    }
})
export default CouponsSlice.reducer