import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppLink } from './AppLink';
import React from 'react';

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Primary link',
		to: '/'
	},
};

export const Secondary: Story = {
	args: {
		children: 'Secondary link',
		to: '/'
	},
};
