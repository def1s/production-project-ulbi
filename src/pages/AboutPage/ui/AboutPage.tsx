import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    className?: string
}

export const AboutPage = ({ className }: AboutPageProps) => {
	const { t } = useTranslation('about');

	return (
		<div>
			{t('Страница о нас')}
		</div>
	);
};
