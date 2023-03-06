import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storesType } from '../../reducers';
import './index.scss';
import { FETCH_GET_OPTIONS, FETCH_SEARCH, SET_SEARCH_RESULT } from './model';
import { searchFormField as initSearchFormField } from './model/data';
import { Options } from './model/types';

function Index() {
    const dispatch = useDispatch();

    const { options } = useSelector((state: storesType) => ({ ...state.searchForm }));

    const [searchFormData, setSearchFormData] = React.useState(initSearchFormField);

    const handleOnChange = (props: React.ChangeEvent<HTMLInputElement> | Record<string, any>) => {
        const dataTarget = props.target ?? props;
        const { name: inputName, value: inputValue } = dataTarget;

        setSearchFormData({
            ...searchFormData,
            [inputName]: inputValue
        });
    };

    const handleOnSubmit = async () => {
        if (!searchFormData.trainDate) return alert('請選擇日期');
        dispatch(FETCH_SEARCH(searchFormData));
    };

    const handleClearSearchForm = () => {
        setSearchFormData(initSearchFormField);
        dispatch(SET_SEARCH_RESULT([]));
    };

    React.useEffect(() => {
        dispatch(FETCH_GET_OPTIONS());
    }, []);

    return (
        <>
            <div className="searchForm__inputField">
                <div>
                    <span>起程站</span>
                    <select name="startStationId" id="startStationId" onChange={handleOnChange}>
                        {options.map((item: Options) => (
                            <option key={item.id} id={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <span>到達站</span>
                    <select name="endStationId" id="endStationId" onChange={handleOnChange}>
                        {options.map((item: Options) => (
                            <option key={item.id} id={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <span>日期</span>
                    <input
                        type="date"
                        onChange={handleOnChange}
                        className="searchForm__inputField_dateInput"
                        name="trainDate"
                        id="trainDate"
                    />
                </div>
            </div>

            <div className="buttonGroup">
                <button type="button" className="submitButton" onClick={handleOnSubmit}>
                    查詢
                </button>
                <button type="button" className="clearButton" onClick={handleClearSearchForm}>
                    清空條件
                </button>
            </div>
        </>
    );
}

export default Index;
