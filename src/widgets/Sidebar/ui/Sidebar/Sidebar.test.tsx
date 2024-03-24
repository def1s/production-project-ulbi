import { screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar tests', () => {
	test('Render text', () => {
		// для i18n
		renderWithTranslation(<Sidebar/>);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
});
