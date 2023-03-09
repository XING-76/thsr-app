import { storesType } from '@container/reducers';
import React from 'react';
import { useSelector } from 'react-redux';

function SearchResultTable() {
    const { searchResult } = useSelector((state: storesType) => ({ ...state.mainPage }));

    React.useEffect(() => {
        console.log(searchResult);
    }, [searchResult]);

    return <div>index</div>;
}

export default SearchResultTable;
