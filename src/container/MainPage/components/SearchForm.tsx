import { storesType } from '@container/reducers';
import { handleCheckToken } from '@utils/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_GET_OPTIONS, FETCH_SEARCH, SET_SEARCH_FORM_FIELD, SET_SEARCH_RESULT } from '../model';
import { dateRestrict, searchFormField as initSearchFormField } from '../model/data';
import { Options } from '../model/types';
import './css/searchForm.scss';

function SearchForm() {
    const dispatch = useDispatch();

    const { options } = useSelector((state: storesType) => ({ ...state.mainPage }));

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
        if (!searchFormData.startStationId) return alert('起程站為必填');
        if (!searchFormData.endStationId) return alert('到達站為必填');
        if (searchFormData.startStationId === searchFormData.endStationId) return alert('起程站不能與到達站相同');
        if (!searchFormData.trainDate) return alert('請選擇日期');
        dispatch(SET_SEARCH_FORM_FIELD(searchFormData));
        dispatch(FETCH_SEARCH(searchFormData));
    };

    const handleClearSearchForm = () => {
        setSearchFormData(initSearchFormField);
        dispatch(SET_SEARCH_FORM_FIELD(initSearchFormField));
        dispatch(SET_SEARCH_RESULT([]));
    };

    React.useEffect(() => {
        handleCheckToken();
        dispatch(FETCH_GET_OPTIONS());
    }, []);

    return (
        <>
            <div className="searchForm__inputField">
                <div>
                    <span>起程站</span>
                    <select
                        value={searchFormData.startStationId}
                        name="startStationId"
                        id="startStationId"
                        onChange={handleOnChange}>
                        <option hidden value="">
                            請選擇
                        </option>
                        {options.map((item: Options) => (
                            <option key={item.id} id={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <span>到達站</span>
                    <select
                        value={searchFormData.endStationId}
                        name="endStationId"
                        id="endStationId"
                        onChange={handleOnChange}>
                        <option hidden value="">
                            請選擇
                        </option>
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
                        value={searchFormData.trainDate}
                        min={dateRestrict.min}
                        max={dateRestrict.max}
                        required
                    />
                </div>
            </div>

            <div className="buttonGroup">
                <button type="button" className="clearButton" onClick={handleClearSearchForm}>
                    清空條件
                </button>
                <button type="button" className="submitButton" onClick={handleOnSubmit}>
                    查詢
                </button>
            </div>
        </>
    );
}

export default SearchForm;
