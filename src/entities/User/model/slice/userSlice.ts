import { UserSchema } from '../types/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserSchema = {};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action) => {
			state.authData = action.payload;
		}
	}
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
