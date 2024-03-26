import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<Button
					theme={ThemeButton.CLEAR_INVERTED}
					onClick={() => setIsAuthModal(true)}
				>
					{t('Войти')}
				</Button>

				<Modal isOpen={isAuthModal} onClose={onToggleModal}>Modal</Modal>
			</div>
		</div>
	);
};
