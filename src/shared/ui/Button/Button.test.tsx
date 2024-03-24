import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
	test('Button text', () => {
		render(<Button>Some text</Button>);
		expect(screen.getByText('Some text')).toBeInTheDocument();
	});

	test('Button with CLEAR theme', () => {
		render(<Button theme={ThemeButton.CLEAR}>Some text</Button>);
		expect(screen.getByText('Some text')).toHaveClass('clear');
	});

	test('Button with OUTLINE theme', () => {
		render(<Button theme={ThemeButton.OUTLINE}>Some text</Button>);
		expect(screen.getByText('Some text')).toHaveClass('outline');
	});

	test('Button click event', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click me</Button>);
		fireEvent.click(screen.getByText(/click me/i));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('Button with additional className', () => {
		render(<Button className="testClass">Some text</Button>);
		expect(screen.getByText('Some text')).toHaveClass('testClass');
	});
});
