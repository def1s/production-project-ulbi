import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeLightIcon from 'shared/assets/icons/theme-light.svg';
import ThemeDarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

// стоит перенести в shared, потому что нельзя использовать в других виджетах по методологии?
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
			theme={ThemeButton.CLEAR}
		>
			{theme === Theme.LIGHT ? <ThemeLightIcon/> : <ThemeDarkIcon/>}
		</Button>
	);
};
