import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useUpdateData} from '../../../hooks/useUpdateData'
export const UpdateProfile = createAsyncThunk('profile/UpdateProfile',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateData("/api/v1/user/updateLoggedUserData",data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const UpdatePassword = createAsyncThunk('profile/UpdatePassword',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateData("/api/v1/user/updateLoggedUserPassword",data);        
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