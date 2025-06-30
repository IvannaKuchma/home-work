import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import categoryReducer from "./redux/categorySlice";
import historyReducer from "./redux/historySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    history: historyReducer,
    },  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;