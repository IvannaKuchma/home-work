import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/shared/types/user';
import { initialUserState } from '@/shared/constants/user';

export const fetchUserById = createAsyncThunk('user/fetchById', async (id: string) => {
  const res = await axios.get(`/users/${id}`);
  return res.data as User;
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;