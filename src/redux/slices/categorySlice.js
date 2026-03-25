import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../common/userAxios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
  loaded: false,
  lastFetched: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { success, data } = await axios.get("/home/get-categories");
      if (!success) {
        return rejectWithValue("Failed to fetch categories");
      }
      return Array.isArray(data) ? data : [];
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch categories");
    }
  },
);

export const fetchCategoriesIfNeeded = () => (dispatch, getState) => {
  const { categories } = getState();
  if (categories.status === "loading" || categories.loaded) {
    return;
  }
  dispatch(fetchCategories());
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.loaded = true;
        state.lastFetched = Date.now();
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        state.items = [];
        state.loaded = false;
      });
  },
});

export default categorySlice.reducer;
