import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axiosInstance';
import { Category } from '../../shared/types/category';

export const fetchCategories = createAsyncThunk('categories/fetchAll', async () => {
  const res = await axios.get('/categories');
  return res.data as Category[];
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: [] as Category[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default categorySlice.reducer;