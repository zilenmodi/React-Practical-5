// // UserSlice.js
import * as redux from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = redux.createAsyncThunk(
  "users/fetchUsers",
  async (page) => {
    const response = await axios.get(
      `https://servers-omega.vercel.app/users/p?limit=10&page=${page}`
    );
    return response.data;
  }
);

const usersSlice = redux.createSlice({
  name: "posts",
  initialState: { data: [], status: "idle", error: null, pages: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.users;
        state.pages = action.payload.totalPages;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
