import ObjectUtils from '@utils/objectUtils';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    handleCancel?: Function;
    className?: string;
};

function Modal({ children, isOpen, handleCancel, className }: Props) {
    const targetContainer = document.querySelector('#root');

    const [mouseDownElement, setMouseDownElement] = React.useState<Element | null>(null);
    const notFound = -1;

    const handleClickBackDrop = () => {
        setMouseDownElement(null);
        if (!ObjectUtils.isExist(mouseDownElement)) handleCancel ? handleCancel() : '';
    };

    const handleClickInsideModal = (event: React.MouseEvent) => event.stopPropagation();

    const handleMouseDown = (event: React.MouseEvent) => {
        setMouseDownElement(event.target as Element);
    };

    /**
     * 判斷滑鼠放開時的位置是否在modal__wrapper內
     */
    const handleMouseUp = () => {
        const modalElement = document.querySelector('.modal__wrapper');

        if (!ObjectUtils.isExist(mouseDownElement))
            if (
                !modalElement?.contains(mouseDownElement) &&
                mouseDownElement?.className?.indexOf('modal__backdrop') !== notFound
            ) {
                handleCancel ? handleCancel() : '';
            }

        setMouseDownElement(null);
    };

    return ReactDOM.createPortal(
        <>
            {isOpen ? (
                <div className="modal__backdrop" onClick={handleClickBackDrop}>
                    <div
                        className={`modal__wrapper ${className}`}
                        onClick={handleClickInsideModal}
                        onMouseUp={handleMouseUp}
                        onMouseDown={handleMouseDown}>
                        {children}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>,
        targetContainer as HTMLElement
    );
}
export default Modal;
