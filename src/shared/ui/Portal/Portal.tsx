import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    elemnt?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, elemnt = document.body } = props;

    return createPortal(children, elemnt);
};
