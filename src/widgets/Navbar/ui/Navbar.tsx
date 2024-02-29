import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} to={'/'}>Main</AppLink>
				<AppLink className={cls.mainLink} to={'/about'}>Page</AppLink>
			</div>
		</div>
	);
};
