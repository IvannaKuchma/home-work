import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';
import { HistoryItem } from '../../shared/types';

interface HistoryState {
  data: HistoryItem[];
  loading: boolean;
  error: string | null;
}

const initialState: HistoryState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchHistory = createAsyncThunk('history/fetchAll', async () => {
  const res = await axios.get('/histories');
  return res.data as HistoryItem[];
});

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
        state.error = action.error.message ?? 'Failed to fetch history';
      });
  },
});

export default historySlice.reducer;