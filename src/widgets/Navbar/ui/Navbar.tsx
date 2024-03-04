import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<ThemeSwitcher/>

			<div className={cls.links}>
				<AppLink className={cls.mainLink} to={'/'}>Main</AppLink>
				<AppLink className={cls.mainLink} to={'/about'}>About</AppLink>
			</div>
		</div>
	);
};
