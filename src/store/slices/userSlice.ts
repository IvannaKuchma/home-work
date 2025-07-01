import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';
import { User } from '../../shared/types';

interface UserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchUserById = createAsyncThunk('user/fetchById', async (id: string) => {
  const res = await axios.get(`/users/${id}`);
  return res.data as User;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user';
      });
  },
});

export default userSlice.reducer;