import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useInsertData} from '../../../hooks/useInsertData'
import useGetDataByToken from '../../../hooks/useGetDataByToken';
import useDeleteData from '../../../hooks/useDeleteData';
import {useUpdateData} from '../../../hooks/useUpdateData'
export const PostAddress = createAsyncThunk('Address/PostAddress',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData("/api/v1/user/userAddresses",data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const GetAddress = createAsyncThunk('Address/GetAddress',async (url,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetDataByToken(url);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const DeleteAddress = createAsyncThunk('Address/DeleteAddress',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useDeleteData(`/api/v1/user/userAddresses/${id}`);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const UpdateAddress = createAsyncThunk('Address/UpdateAddress',async (obj,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateData(`/api/v1/user/userAddresses/${obj.id}`,obj.data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
const initialState = {
    PostData:[],
    GetData:[],
    DeleteData:[],
    EditData:[]
}
const AddressSlice = createSlice({
    name:'AddressSlice',
    initialState,
    extraReducers:{
        [PostAddress.fulfilled]:(state,action)=>{
            state.PostData = action.payload
        },
        [PostAddress.rejected]:(state,action)=>{
            state.PostData = action.payload
        },[GetAddress.fulfilled]:(state,action)=>{
            state.GetData = action.payload
        },
        [GetAddress.rejected]:(state,action)=>{
            state.GetData = action.payload
        },
        [DeleteAddress.fulfilled]:(state,action)=>{
            state.DeleteData = action.payload
        },
        [DeleteAddress.rejected]:(state,action)=>{
            state.DeleteData = action.payload
        },
        [UpdateAddress.fulfilled]:(state,action)=>{
            state.EditData = action.payload
        },
        [UpdateAddress.rejected]:(state,action)=>{
            state.EditData = action.payload
        }
    }
})
export default AddressSlice.reducer