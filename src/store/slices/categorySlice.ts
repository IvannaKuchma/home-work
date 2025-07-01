import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';
import { Category } from '../../shared/types/category';

interface CategoriesState {
  data: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  data: [],
  loading: false,
  error: null,
};


export const fetchCategories = createAsyncThunk('categories/fetchAll', async () => {
  const res = await axios.get('/categories');
  return res.data as Category[];
});

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch categories';
      });
  },
});

export default categorySlice.reducer;