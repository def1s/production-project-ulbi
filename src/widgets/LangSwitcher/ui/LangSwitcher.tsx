import cls from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const onSwitchLang = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
		console.log(i18n.language);
	};

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			onClick={onSwitchLang}
		>
			{t('Язык')}
		</Button>
	);
};
