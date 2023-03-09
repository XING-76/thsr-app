import React from 'react';
import './style.scss';

interface Props {
    className?: string;
    children?: any;
    onClick?: Function;
}

function TableRow(props: Props) {
    const { className = '', onClick, children } = props;

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const element = event.target as Element;

        if (element.getAttribute('data-stop-prop')) {
            return;
        }
        if (onClick) onClick(event);
    };

    return (
        <div className={`table__row ${className}`} onClick={handleOnClick}>
            {children}
        </div>
    );
}

export default TableRow;
