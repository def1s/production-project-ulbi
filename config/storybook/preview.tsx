import type { Preview } from '@storybook/react';
import React from 'react';
import '../../src/app/styles/index.scss';
import { MemoryRouter } from 'react-router-dom';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div className={'App'}>
				<Story />
			</div>
		),
		Story => (
			<MemoryRouter>
				<Story/>
			</MemoryRouter>
		),
	]
};

export default preview;
