import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes } from 'react';

export enum ThemeInput {
	OUTLINE = 'outline'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
	theme?: ThemeInput;
	value?: string;
	onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
	const {
		className,
		theme = ThemeInput.OUTLINE,
		placeholder,
		type = 'text',
		value,
		onChange,
		...otherProps
	} = props;

	const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<input
			className={classNames(cls.Input, {}, [className, cls[theme]])}
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={(e) => onHandleChange(e)}
			{...otherProps}
		>

		</input>
	);
};
