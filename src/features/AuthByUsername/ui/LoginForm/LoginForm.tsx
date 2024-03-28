import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { useCallback } from 'react';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const {
		username,
		password,
		isLoading,
		error
	} = useSelector(getLoginState);

	const onChangeUsername = useCallback((username: string) => {
		dispatch(loginActions.setUsername(username));
	}, [dispatch]);

	const onChangePassword = useCallback((password: string) => {
		dispatch(loginActions.setPassword(password));
	}, [dispatch]);

	const onLogin = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			{
				error && <div>{error}</div>
			}

			<Input
				className={cls.input}
				type="text"
				placeholder={t('Введите имя пользователя')}
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				className={cls.input}
				type="text"
				placeholder={t('Введите пароль')}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				theme={ThemeButton.OUTLINE}
				onClick={onLogin}
				disabled={isLoading}
			>
				{isLoading ? t('Загрузка...') : t('Войти')}
			</Button>
		</div>
	);
};
