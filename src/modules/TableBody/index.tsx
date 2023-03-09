import './style.scss';

interface Props {
    className?: string;
    // children: Array<object>;
    children: any;
    noDataText?: string;
}

function TableBody(props: Props) {
    const { className = '', noDataText = '無資料', children } = props;

    return (
        <div className={`table__body ${children.length === 0 ? 'noData' : ''} ${className}`}>
            {children.length === 0 ? `${noDataText}` : <>{children}</>}
        </div>
    );
}

export default TableBody;
