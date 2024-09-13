import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

export const PostRate = createAsyncThunk(
  "Rate/PostRate",
  async (obj, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await useInsertData(obj.url, obj.data);
      return respon;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const GetRate = createAsyncThunk(
  "Rate/GetRate",
  async (obj, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await useGetData(
        `/api/v1/product/${obj.id}/rating?page=${obj.page}&limit=${obj.limit}`
      );
      return respon;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const DeleteRate = createAsyncThunk(
  "Rate/DelateRate",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await useDeleteData(`/api/v1/rating/${id}`);
      return respon;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const UpdateRate = createAsyncThunk(
  "Rate/UpdateRate",
  async (obj, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await useUpdateData(obj.url, obj.data);
      return respon;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const initialState = {
  Loading: "",
  PostData: [],
  updateData: [],
  GetRes: [],
  DeleteRate: [],
};
const RateSlice = createSlice({
  name: "RateSlice",
  initialState,
  extraReducers: {
    [PostRate.pending]: (state, action) => {
      state.Loading = true;
    },
    [PostRate.fulfilled]: (state, action) => {
      state.DeleteRate = [];
      state.updateData = [];
      state.Loading = false;
      state.PostData = action.payload;
    },
    [PostRate.rejected]: (state, action) => {
      state.DeleteRate = [];
      state.updateData = [];
      state.Loading = false;
      state.PostData = action.payload;
    },
    [GetRate.fulfilled]: (state, action) => {
      state.GetRes = action.payload;
    },
    [GetRate.rejected]: (state, action) => {
      state.GetRes = action.payload;
    },
    [DeleteRate.fulfilled]: (state, action) => {
      state.PostData = [];
      state.updateData = [];
      state.DeleteRate = action.payload;
    },
    [DeleteRate.rejected]: (state, action) => {
      state.PostData = [];
      state.updateData = [];
      state.DeleteRate = "error";
    },
    [UpdateRate.fulfilled]: (state, action) => {
      state.PostData = [];
      state.DeleteRate = [];
      state.updateData = action.payload;
    },
    [UpdateRate.rejected]: (state, action) => {
      state.PostData = [];
      state.DeleteRate = [];
      state.updateData = "error";
    },
  },
});
export default RateSlice.reducer;
