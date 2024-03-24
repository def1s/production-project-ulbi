import { render, screen } from '@testing-library/react';
import { AppLink, AppLinkThemes } from './AppLink';
import { BrowserRouter } from 'react-router-dom';

describe('AppLink', () => {
	test('renders children correctly', () => {
		render(
			<BrowserRouter>
				<AppLink to="/test">Test Link</AppLink>
			</BrowserRouter>
		);
		expect(screen.getByText('Test Link')).toBeInTheDocument();
	});

	test('applies primary theme by default', () => {
		render(
			<BrowserRouter>
				<AppLink to="/test">Test Link</AppLink>
			</BrowserRouter>
		);
		expect(screen.getByText('Test Link')).toHaveClass('primary');
	});

	test('applies secondary theme when specified', () => {
		render(
			<BrowserRouter>
				<AppLink to="/test" theme={AppLinkThemes.SECONDARY}>
					Test Link
				</AppLink>
			</BrowserRouter>
		);
		expect(screen.getByText('Test Link')).toHaveClass('secondary');
	});

	test('applies additional className when provided', () => {
		render(
			<BrowserRouter>
				<AppLink to="/test" className="testClass">
					Test Link
				</AppLink>
			</BrowserRouter>
		);
		expect(screen.getByText('Test Link')).toHaveClass('testClass');
	});
});
