import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useUpdateData } from "../../../hooks/useUpdateData";
import { useInsertData } from "../../../hooks/useInsertData";
import useGetDataByToken from "../../../hooks/useGetDataByToken";
import useDeleteData from "../../../hooks/useDeleteData";
import usePatchData from "../../../hooks/usePatchData";
export const PostCart = createAsyncThunk(
  "cart/PostCart",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await useInsertData("/api/v1/cart", data);
      return respon;
    } catch (err) {      
      return rejectWithValue(err.response.data);
    }
  }
);
export const GetCart = createAsyncThunk("cart/GetCart", async (n, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const respon = await useGetDataByToken("/api/v1/cart");
    return respon;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});
export const UpdateCart = createAsyncThunk(
  "cart/UpdateCart",
  async (obj, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await usePatchData(`/api/v1/cart/${obj.id}`, obj.par);
      return respon;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const CartCoupon = createAsyncThunk(
  "cart/CartCoupon",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await useInsertData("/api/v1/cart/couponDiscount", data);
      return respon;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const DeleteCart = createAsyncThunk(
  "cart/DeleteCart",
  async (n, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await useDeleteData("/api/v1/cart");
      return respon;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const DeleteOneCart = createAsyncThunk(
  "cart/DeleteOneCart",
  async (obj, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await useUpdateData(`/api/v1/cart/${obj.id}`, {
        color: obj.color,
      });
      return respon;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const initialState = {
  PostData: [],
  numOfCartItems: 0,
  GetData: [],
  UpdateData: [],
  DeleteData: [],
  DeleteOneData: [],
  CartCouponData: [],
  Loading: "",
};
const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  extraReducers: {
    [PostCart.fulfilled]: (state, action) => {
      state.PostData = action.payload;
      state.numOfCartItems = action.payload?.data?.numOfCartItems;
      localStorage.setItem("cart", action.payload?.data?.numOfCartItems);
    },
    [PostCart.rejected]: (state, action) => {
      state.PostData = action.payload;
    },
    [GetCart.pending]: (state, action) => {
      state.GetData = action.payload;
      state.Loading = true;
    },
    [GetCart.fulfilled]: (state, action) => {
      state.GetData = action.payload;
      state.numOfCartItems = action.payload?.data?.numOfCartItems;
      localStorage.setItem("cart", action.payload?.data?.numOfCartItems);
      state.Loading = false;
    },
    [GetCart.rejected]: (state, action) => {
      state.GetData = action.payload;
      state.Loading = false;
      state.numOfCartItems = "deleted"
      localStorage.setItem("cart", 0);
    },
    [UpdateCart.fulfilled]: (state, action) => {
      state.UpdateData = action.payload;
    },
    [UpdateCart.rejected]: (state, action) => {
      state.UpdateData = action.payload;
    },
    [DeleteCart.fulfilled]: (state, action) => {
      state.DeleteData = action.payload;
      state.numOfCartItems = "deleted";
    },
    [DeleteCart.rejected]: (state, action) => {
      state.DeleteData = action.payload;
    },
    [DeleteOneCart.fulfilled]: (state, action) => {
      state.DeleteOneData = action.payload;
      state.numOfCartItems = action.payload?.data?.numOfCartItems;
      localStorage.setItem("cart", action.payload?.data?.numOfCartItems);
    },
    [DeleteOneCart.rejected]: (state, action) => {
      state.DeleteOneData = action.payload;
    },
    [CartCoupon.fulfilled]: (state, action) => {
      state.CartCouponData = action.payload;
    },
    [CartCoupon.rejected]: (state, action) => {
      state.CartCouponData = action.payload;
    },
  },
});
export default CartSlice.reducer;
