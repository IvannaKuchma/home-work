import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '@/utils/axiosInstance';
import { History } from '@/shared/types/history';

export const fetchHistory = createAsyncThunk<History[]>(
  'history/fetchAll',
  async () => {
    const res = await axios.get('/histories');
    return res.data;
  }
);

const initialState = {
  data: [] as History[],
  loading: false,
  error: null as string | null,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export default historySlice.reducer;
