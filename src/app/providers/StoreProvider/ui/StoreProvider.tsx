import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode;
}

export const store = createReduxStore();
export type AppDispatch = typeof store.dispatch;

export const StoreProvider = ({ children }: StoreProviderProps) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
