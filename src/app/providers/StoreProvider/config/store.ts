import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore() {
	const rootReducers: ReducersMapObject<StateSchema> = {
		user: userReducer,
		loginForm: loginReducer
	};

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		// preloadedState: initialState
	});
}
