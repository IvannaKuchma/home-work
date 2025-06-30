import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category, User} from '../types';

const initialState: Category[] = [];

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<Category>) => {
            state.push(action.payload);
        },
        updateCategory: (state, action: PayloadAction<Category>) => {
            const index = state.findIndex(category => category.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteCategory: (state, action: PayloadAction<string>) => {
            return state.filter(category => category.id !== action.payload);
        }
    },
});

export const {addCategory, updateCategory, deleteCategory} = categorySlice.actions;
export default categorySlice.reducer;