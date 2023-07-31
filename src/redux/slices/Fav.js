import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useInsertData} from '../../hooks/useInsertData'
import useDeleteData from '../../hooks/useDeleteData'
import useGetDataByToken from '../../hooks/useGetDataByToken';

export const PostFav = createAsyncThunk('fav/PostFav',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData('/api/v1/wishlist',data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const DeleteFav = createAsyncThunk('fav/DeleteFav',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useDeleteData(`api/v1/wishlist/${id}`);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const GetFav = createAsyncThunk('fav/GetFav',async (n,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetDataByToken("api/v1/wishlist");
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
const initialState = {
    data:[],
    PostData:[],
    DelData:[]
}
const Favslice = createSlice({
    name:'Favslice',
    initialState,
    extraReducers:{
        [GetFav.fulfilled]:(state,action)=>{
            state.data = action.payload
        },
        [GetFav.rejected]:(state,action)=>{
            state.data = action.payload
        },
        [PostFav.fulfilled]:(state,action)=>{
            state.PostData = action.payload
        },
        [PostFav.rejected]:(state,action)=>{
            state.PostData = action.payload
        },
        [DeleteFav.fulfilled]:(state,action)=>{
            state.DelData = action.payload
        },
        [DeleteFav.rejected]:(state,action)=>{
            state.DelData = action.payload
        }
    }
})
export default Favslice.reducer