import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const onSwitchLang = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			className={classNames('', {}, [className])}
			onClick={onSwitchLang}
		>
			{t('Язык')}
		</Button>
	);
};
