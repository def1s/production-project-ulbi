import { useTranslation } from 'react-i18next';

interface MainPageProps {
    className?: string
}

export const MainPage = ({ className }: MainPageProps) => {
	const { t } = useTranslation('main');

	return (
		<div>
			{t('Основная страница')}
		</div>
	);
};
