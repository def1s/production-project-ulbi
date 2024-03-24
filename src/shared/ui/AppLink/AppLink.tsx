import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import React, { FC } from 'react';

export enum AppLinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkThemes;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const { className,
		to,
		children,
		theme = AppLinkThemes.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			to={to}
			{...otherProps}
		>
			{children}
		</Link>
	);
};
