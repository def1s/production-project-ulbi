import { LoginSchema } from '../types/loginSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
	username: '',
	password: '',
	isLoading: false
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(loginByUsername.pending, (state, action) => {
			state.error = undefined;
			state.isLoading = true;
		});

		builder.addCase(loginByUsername.fulfilled, (state, action) => {
			state.isLoading = false;
		});

		builder.addCase(loginByUsername.rejected, (state, action) => {
			state.isLoading = false;
			state.error = 'Error!';
		});
	}
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
