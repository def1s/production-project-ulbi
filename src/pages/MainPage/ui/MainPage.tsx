import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

interface MainPageProps {
    className?: string
}

export const MainPage = ({ className }: MainPageProps) => {
	const { t } = useTranslation('main');

	return (
		<div>
			{t('Основная страница')}
			<BugButton/>
		</div>
	);
};
