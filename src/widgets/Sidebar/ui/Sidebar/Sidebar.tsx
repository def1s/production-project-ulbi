import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapsed = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			data-testid={'sidebar'}
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<button onClick={onCollapsed}>toggle</button>

			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher/>
			</div>
		</div>
	);
};
