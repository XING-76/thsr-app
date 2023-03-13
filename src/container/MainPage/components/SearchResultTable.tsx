import { storesType } from '@container/reducers';
import TableBody from '@modules/TableBody';
import { useDispatch, useSelector } from 'react-redux';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { FETCH_GET_DETAIL, SET_TRAIN_ITEM } from '../model';
import { tableTitle } from '../model/data';
import { SearchResultData } from '../model/types';
import './css/searchResultTable.scss';

interface Props {
    index?: any;
    style?: any;
    data?: any;
}

function Row({ index, style, data }: Props) {
    const dispatch = useDispatch();

    const handleOnClick = (item: SearchResultData) => {
        const { trainDate, trainNumber } = item;
        const requestData = { trainDate, trainNumber };
        dispatch(SET_TRAIN_ITEM(item));
        dispatch(FETCH_GET_DETAIL(requestData));
    };

    return (
        <div key={index} style={style} className="searchResultTable__tableRow">
            <div className="searchResultTable__tableRow_item" onClick={() => handleOnClick(data[index])}>
                <button type="button">{data[index].trainNumber}</button>
            </div>
            <div className="searchResultTable__tableRow_item">{data[index].departureTime}</div>
            <div className="searchResultTable__tableRow_item">{data[index].arrivalTime}</div>
            <div className="searchResultTable__tableRow_item">{data[index].travelTime}</div>
        </div>
    );
}

function SearchResultTable() {
    const { searchResult } = useSelector((state: storesType) => ({ ...state.mainPage }));

    return (
        <div className="searchResultTable__container">
            <div className="searchResultTable__tableHead">
                {tableTitle.map((item) => (
                    <div key={item.id} className="searchResultTable__tableHead_title">
                        {item.title}
                    </div>
                ))}
            </div>

            <TableBody>
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            itemData={searchResult}
                            itemCount={searchResult.length}
                            height={height}
                            itemSize={searchResult.length < 30 ? searchResult.length * 3 : searchResult.length}
                            width={width}>
                            {Row}
                        </List>
                    )}
                </AutoSizer>
            </TableBody>
        </div>
    );
}

export default SearchResultTable;
