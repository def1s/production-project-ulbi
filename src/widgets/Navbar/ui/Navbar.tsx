import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseAuth = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onOpenAuth = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<Button
					theme={ThemeButton.CLEAR_INVERTED}
					onClick={onOpenAuth}
				>
					{t('Войти')}
				</Button>

				<LoginModal
					isOpen={isAuthModal}
					onClose={onCloseAuth}
				/>
			</div>
		</div>
	);
};
