import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useUpdateData} from '../../../hooks/useUpdateData'
export const UpdateProfile = createAsyncThunk('Address/UpdateProfile',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateData("/api/v1/users/updateMe",data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const UpdatePassword = createAsyncThunk('Address/UpdatePassword',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateData("/api/v1/users/changeMyPassword",data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
const initialState = {
    UpdatePass:[],
    UpdateData:[]
}
const ProfileSlice = createSlice({
    name:'ProfileSlice',
    initialState,
    extraReducers:{
        [UpdateProfile.fulfilled]:(state,action)=>{
            state.UpdateData = action.payload
        },
        [UpdateProfile.rejected]:(state,action)=>{
            state.UpdateData = action.payload
        },
        [UpdatePassword.fulfilled]:(state,action)=>{
            state.UpdatePass = action.payload
        },
        [UpdatePassword.rejected]:(state,action)=>{
            state.UpdatePass = action.payload
        }
    }
})
export default ProfileSlice.reducer