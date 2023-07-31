import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {useUpdateData} from '../../../hooks/useUpdateData'
import {useInsertData} from '../../../hooks/useInsertData'
import useGetDataByToken from '../../../hooks/useGetDataByToken';
import useDeleteData from '../../../hooks/useDeleteData';
export const PostCart = createAsyncThunk('cart/PostCart',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useInsertData("/api/v1/cart",data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const GetCart = createAsyncThunk('cart/GetCart',async (n,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useGetDataByToken("/api/v1/cart");
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const UpdateCart = createAsyncThunk('cart/UpdateCart',async (obj,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateData(`/api/v1/cart/${obj.id}`,obj.count);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const CartCoupon = createAsyncThunk('cart/CartCoupon',async (data,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useUpdateData("/api/v1/cart/applyCoupon",data);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const DeleteCart = createAsyncThunk('cart/DeleteCart',async (n,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useDeleteData("/api/v1/cart");
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
export const DeleteOneCart = createAsyncThunk('cart/DeleteOneCart',async (id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const respon = await useDeleteData(`/api/v1/cart/${id}`);
        return respon
    }catch(err){
        return rejectWithValue(err.response.data) 
    }
})
const initialState = {
    PostData:[],
    GetData:[],
    UpdateData:[],
    DeleteData:[],
    DeleteOneData:[],
    CartCouponData:[],
    Loading:''
}
const CartSlice = createSlice({
    name:'CartSlice',
    initialState,
    extraReducers:{
        [PostCart.fulfilled]:(state,action)=>{
            state.PostData = action.payload
        },
        [PostCart.rejected]:(state,action)=>{
            state.PostData = action.payload
        },
        [GetCart.pending]:(state,action)=>{
            state.GetData = action.payload
            state.Loading = true
        },
        [GetCart.fulfilled]:(state,action)=>{
            state.GetData = action.payload
            state.Loading = false
        },
        [GetCart.rejected]:(state,action)=>{
            state.GetData = action.payload
            state.Loading = false
        },
        [UpdateCart.fulfilled]:(state,action)=>{
            state.UpdateData = action.payload
        },
        [UpdateCart.rejected]:(state,action)=>{
            state.UpdateData = action.payload
        },
        [DeleteCart.fulfilled]:(state,action)=>{
            state.DeleteData = action.payload
        },
        [DeleteCart.rejected]:(state,action)=>{
            state.DeleteData = action.payload
        },
        [DeleteOneCart.fulfilled]:(state,action)=>{
            state.DeleteOneData = action.payload
        },
        [DeleteOneCart.rejected]:(state,action)=>{
            state.DeleteOneData = action.payload
        },
        [CartCoupon.fulfilled]:(state,action)=>{
            state.CartCouponData = action.payload
        },
        [CartCoupon.rejected]:(state,action)=>{
            state.CartCouponData = action.payload
        }
    }
})
export default CartSlice.reducer