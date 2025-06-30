import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../types';

const initialState: User = {
    name: '',
    password: '',
    photo: '',
    email: '',
    startBalance: 0,
};  

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            return action.payload;
        },
        updateBalance: (state, action: PayloadAction<number>) => {
            state.startBalance += action.payload;
        }
    },
});

export const {setUser, updateBalance} = userSlice.actions;
export default userSlice.reducer;