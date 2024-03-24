import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {

	return (
		<div className={classNames('lds-ring', {}, [className])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
