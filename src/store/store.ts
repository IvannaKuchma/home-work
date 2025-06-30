import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import categoryReducer from './slices/categorySlice';
import historyReducer from './slices/historySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoryReducer,
    histories: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;