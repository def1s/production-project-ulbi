import React from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {

	return (
		<Routes>
			{
				Object.values(routeConfig).map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={
							<div className={'page-wrapper'}>
								{element}
							</div>
						}
					/>
				))
			}
		</Routes>
	);
};

export default AppRouter;
