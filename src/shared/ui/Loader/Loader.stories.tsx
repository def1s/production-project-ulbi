import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import 'app/styles/index.scss';
import React from 'react';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'shared/Loader',
	component: Loader,
	tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightBackground: Story = {};
export const DarkBackground: Story = {
	decorators: [
		(Story) => (
			<div className={`App ${Theme.DARK}`}>
				<Story/>
			</div>
		),
	]
};
