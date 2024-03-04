import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapsed = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={onCollapsed}>toggle</button>

			<div className={cls.switchers}>
				<ThemeSwitcher/>
			</div>
		</div>
	);
};