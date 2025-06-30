import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { HistoryItem } from '../types';
import {v4 as uuidv4} from 'uuid';

const initialState: HistoryItem[] = [];

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistoryItem: (state, action: PayloadAction<Omit<HistoryItem, 'id'>>) => {
            const newItem = {...action.payload, id: uuidv4()};
            state.push(newItem);
        },
        updateHistoryItem: (state, action: PayloadAction<HistoryItem>) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteHistoryItem: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.id !== action.payload);
        }
    },
});

export const {addHistoryItem, updateHistoryItem, deleteHistoryItem} = historySlice.actions;
export default historySlice.reducer;
