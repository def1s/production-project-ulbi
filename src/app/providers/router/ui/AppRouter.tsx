import React from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {

	return (
		<div>
			<Routes>
				{
					Object.values(routeConfig).map((route) => {
						return <Route key={route.path} path={route.path} element={route.element}/>;
					})
				}
			</Routes>
		</div>
	);
};

export default AppRouter;
