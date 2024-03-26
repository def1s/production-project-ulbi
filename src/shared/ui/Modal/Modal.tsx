import cls from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
	isOpen?: boolean;
	onClose?: () => void;
	children: ReactNode;
}

const ANIMATION_DELAY = 100;

export const Modal = (props: ModalProps) => {
	const {
		className,
		isOpen,
		onClose,
		children
	} = props;

	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<NodeJS.Timeout>();

	const handleClose = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			handleClose();
		}
	}, [handleClose]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const onContentClick = useCallback((e: MouseEvent) => {
		e.stopPropagation();
	}, []);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	};

	return (
		<Portal>
			<div className={classNames(cls.Modal, { ...mods }, [className])}>
				<div
					className={cls.overlay}
					onClick={handleClose}
				>
					<div
						className={cls.content}
						onClick={onContentClick}
					>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
