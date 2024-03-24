import cls from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const onReloadPage = () => {
		location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>{t('Произошла непредвиденная ошибка!')}</p>
			<Button
				onClick={onReloadPage}
				theme={ThemeButton.OUTLINE}
			>
				{t('Перезагрузить страницу')}
			</Button>
		</div>
	);
};
