import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} to={'/'}>{t('Основная')}</AppLink>
				<AppLink className={cls.mainLink} to={'/about'}>{t('О нас')}</AppLink>
			</div>
		</div>
	);
};
