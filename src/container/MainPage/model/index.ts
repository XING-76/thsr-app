import { createSlice } from '@reduxjs/toolkit';
import { ReduxResponseColumns, sendPayloadObject } from '@utils/reduxUtils';
import { initialState } from './data';

export const slice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        FETCH_SEARCH: sendPayloadObject(ReduxResponseColumns.PAYLOAD),
        FETCH_GET_OPTIONS: () => {},
        FETCH_ADD: sendPayloadObject(ReduxResponseColumns.PAYLOAD),
        FETCH_GET_DETAIL: sendPayloadObject(ReduxResponseColumns.PAYLOAD),
        SET_SEARCH_RESULT: sendPayloadObject('searchResult'),
        SET_TRAIN_ITEM: sendPayloadObject('trainItem'),
        SET_ON_PARENT_MODAL_DATA: sendPayloadObject('parentModalData'),
        SET_OPTIONS: sendPayloadObject('options'),
        SET_API_STATUS: sendPayloadObject('apiStatus'),
        SET_MODAL_TYPE: sendPayloadObject('modalType'),
        SET_LOADING_STATE: sendPayloadObject('loadingState')
    }
});

export const {
    FETCH_SEARCH,
    FETCH_GET_OPTIONS,
    FETCH_ADD,
    FETCH_GET_DETAIL,
    SET_SEARCH_RESULT,
    SET_TRAIN_ITEM,
    SET_ON_PARENT_MODAL_DATA,
    SET_OPTIONS,
    SET_API_STATUS,
    SET_MODAL_TYPE,
    SET_LOADING_STATE
} = slice.actions;

export default slice.reducer;
