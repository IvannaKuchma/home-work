import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';
import { HistoryItem } from '../../shared/types/history';

export const fetchHistory = createAsyncThunk('histories/fetchAll', async () => {
  const res = await axios.get('/histories');
  return res.data as HistoryItem[];
});

const historySlice = createSlice({
  name: 'histories',
  initialState: [] as HistoryItem[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHistory.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default historySlice.reducer;