import { classNames } from './classNames';

describe('classNames', () => {
	test('with only one params', () => {
		expect(classNames('class')).toBe('class');
	});

	test('with true mods', () => {
		const expected = 'class mode1 mode2';

		expect(classNames('class', { mode1: true, mode2: true }))
			.toBe(expected);
	});

	test('with one false mode', () => {
		const expected = 'class mode1';

		expect(classNames('class', { mode1: true, mode2: false }))
			.toBe(expected);
	});

	test('with full params', () => {
		const expected = 'class1 class2 mode1';

		expect(classNames('class1', { mode1: true }, ['class2']))
			.toBe(expected);
	});
});
