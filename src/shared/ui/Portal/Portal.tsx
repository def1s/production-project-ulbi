import { createPortal } from 'react-dom';
import React from 'react';

interface PortalProps {
    children: React.ReactNode;
	element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
	const {
		children,
		element =  document.body
	} = props;

	return createPortal(children, element);
};
