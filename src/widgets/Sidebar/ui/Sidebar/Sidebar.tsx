import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton, ThemeSizes } from 'shared/ui/Button/Button';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from '/src/shared/assets/icons/main.svg';
import AboutIcon from '/src/shared/assets/icons/about.svg';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();

	const onCollapsed = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			data-testid={'sidebar'}
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				onClick={onCollapsed}
				className={cls.collapsedBtn}
				theme={ThemeButton.BACKGROUND_INVERTED}
				square={true}
				size={ThemeSizes.Xl}
			>
				{collapsed ? '>' : '<'}
			</Button>

			<div className={cls.items}>
				<AppLink
					className={cls.item}
					to={RoutePath.main}
					theme={AppLinkThemes.SECONDARY}
				>
					<MainIcon className={cls.icon}/>
					<span className={cls.link}>
						{t('Основная')}
					</span>
				</AppLink>

				<AppLink
					className={cls.item}
					to={RoutePath.about}
					theme={AppLinkThemes.SECONDARY}
				>
					<AboutIcon className={cls.icon}/>
					<span className={cls.link}>
						{t('О нас')}
					</span>
				</AppLink>
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher
					short={collapsed}
					className={cls.lang}
				/>
			</div>
		</div>
	);
};
