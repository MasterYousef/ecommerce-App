import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useInsertData} from '../../hooks/useInsertData'
import useGetDataByToken from '../../hooks/useGetDataByToken';
export const SighnUp = createAsyncThunk('Auth/SighnUp',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData('/api/v1/auth/signup',data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data.errors[0].msg)
    }
})
export const login = createAsyncThunk('Auth/login',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData('/api/v1/auth/login',data);;
        return respon
    }catch(err){
        return rejectWithValue(err.response.data.message)
    }
})
export const TokenData = createAsyncThunk('Auth/TokenData',async (url,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetDataByToken('/api/v1/user/getLoggedUser');
        return respon
    }catch(err){
        return rejectWithValue(err.response.data.message)
    }
})
export const SendEmail = createAsyncThunk('Auth/SendEmail',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData('/api/v1/auth/forgotenpassword',data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data.status)
    }
})
export const SendCode = createAsyncThunk('Auth/SendCode',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData('/api/v1/auth/resetCode',data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data.status)
    }
})
export const ResetCode = createAsyncThunk('Auth/ResetCode',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData('/api/v1/auth/resetPassword',data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data.status)
    }
})
const initialState = {
    SighnUpRes:"",
    LoginRes:"",
    TokenData:[],
    emailData:[],
    verifyData:[],
    updateData:[],
    Loading:"",
}
const Authentication = createSlice({
    name:'Authentication',
    initialState,
    reducers: {
        resetState: (state) => {
            state.SighnUpRes = "";
            state.LoginRes = "";
            state.TokenData = [];
            state.emailData = [];
            state.verifyData = [];
            state.updateData = [];
            state.Loading = "";
        },
    },
    extraReducers:{
        [ResetCode.pending]:(state)=>{
            state.Loading = true;
        },
        [ResetCode.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.updateData = action.payload
        },
        [ResetCode.rejected]:(state,action)=>{
            state.Loading = false;
            state.updateData = action.payload
            
        },
        [SighnUp.pending]:(state)=>{
            state.Loading = true;
            state.LoginRes = ""
        },
        [SighnUp.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.SighnUpRes = action.payload
        },
        [SighnUp.rejected]:(state,action)=>{
            state.Loading = false;
            state.SighnUpRes = action.payload
        }
        ,[login.pending]:(state)=>{
            state.Loading = true;
            state.SighnUpRes = "";
        },
        [login.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.LoginRes = action.payload
        },
        [login.rejected]:(state,action)=>{
            state.Loading = false;
            state.LoginRes = action.payload
        }
        ,[TokenData.pending]:(state)=>{
            state.Loading = true;
        },
        [TokenData.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.TokenData = action.payload
        },
        [TokenData.rejected]:(state,action)=>{
            state.Loading = false;
            state.TokenData = action.payload
        },[SendEmail.pending]:(state)=>{
            state.Loading = true;
        },
        [SendEmail.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.emailData = action.payload
        },
        [SendEmail.rejected]:(state,action)=>{
            state.Loading = false;
            state.emailData = action.payload
            
        },[SendCode.pending]:(state)=>{
            state.Loading = true;
        },
        [SendCode.fulfilled]:(state,action)=>{
            state.Loading = false;
            state.verifyData = action.payload
        },
        [SendCode.rejected]:(state,action)=>{
            state.Loading = false;
            state.verifyData = action.payload
        }
    }
})
export const { resetState } = Authentication.actions;
export default Authentication.reducer