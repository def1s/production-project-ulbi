import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ThemeSizes {
	M = 'size_m',
	L = 'size_l',
	Xl = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
	theme?: ThemeButton;
	square?: boolean;
	size?: ThemeSizes
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ThemeButton.CLEAR,
		square,
		size,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
	};

	return (
		<button
			className={classNames(cls.Button, { ...mods }, [className, cls[theme], cls[size]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
