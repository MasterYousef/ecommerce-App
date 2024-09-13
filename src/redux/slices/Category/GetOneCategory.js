import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../../hooks/useGetData";
export const GetOnecate = createAsyncThunk(
  "Category/GetOnecate",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const respon = await useGetData(`/api/v1/category/${id}`);
      return respon.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const initialState = {
  category: [],
  Loading: true,
  error: "",
};
const GetOneCategory = createSlice({
  name: "GetOneCategory",
  initialState,
  extraReducers: {
    [GetOnecate.pending]: (state) => {
      state.Loading = true;
    },
    [GetOnecate.fulfilled]: (state, action) => {
      state.Loading = false;
      state.category = action.payload;
    },
    [GetOnecate.rejected]: (state, action) => {
      state.Loading = false;
      state.error = action.payload;
    },
  },
});
export default GetOneCategory.reducer;
