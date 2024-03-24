import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ThemeButton } from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.CLEAR
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE
	},
};
