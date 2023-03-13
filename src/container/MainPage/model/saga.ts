import { HTTP_STATUS_CODE } from '@configs/serviceConfig';
import { PayloadAction } from '@reduxjs/toolkit';
import ApiRequest from '@service/apiRequest';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    convertResponseOfGetDetailAPI,
    convertResponseOfGetOptionsAPI,
    convertResponseOfSearchAPI,
    getParametersOfGetDetailAPI,
    getParametersOfSearchAPI
} from '../service/dataProcessing';
import {
    FETCH_GET_DETAIL,
    FETCH_GET_OPTIONS,
    FETCH_SEARCH,
    SET_API_STATUS,
    SET_LOADING_STATE,
    SET_MODAL_TYPE,
    SET_ON_PARENT_MODAL_DATA,
    SET_OPTIONS,
    SET_SEARCH_RESULT
} from './index';

function* fetchSearchUsers(action: PayloadAction<any>) {
    try {
        yield put(SET_LOADING_STATE(true));
        const request = action.payload;
        const convertedRequest = getParametersOfSearchAPI(request);
        const response: Promise<any> = yield call(ApiRequest.search, convertedRequest);
        const convertedResponse = convertResponseOfSearchAPI(response);

        yield put(SET_SEARCH_RESULT(convertedResponse));
        yield put(SET_API_STATUS({ type: 'search', code: HTTP_STATUS_CODE.OK }));
    } catch (error) {
        console.error(error);
        yield put(SET_API_STATUS({ type: 'search', code: error }));
    } finally {
        yield put(SET_LOADING_STATE(false));
    }
}

function* fetchGetOptions() {
    try {
        yield put(SET_LOADING_STATE(true));
        const response: Promise<any> = yield call(ApiRequest.getStationOptions);
        const convertedResponse = convertResponseOfGetOptionsAPI(response);

        yield put(SET_OPTIONS(convertedResponse));
        yield put(SET_API_STATUS({ type: 'search', code: HTTP_STATUS_CODE.OK }));
    } catch (error) {
        console.error(error);
        yield put(SET_API_STATUS({ type: 'search', code: error }));
    } finally {
        yield put(SET_LOADING_STATE(false));
    }
}

function* fetchGetDetail(action: PayloadAction<any>) {
    try {
        yield put(SET_LOADING_STATE(true));
        const request = action.payload;
        const convertedRequest = getParametersOfGetDetailAPI(request);
        const response: Promise<any> = yield call(ApiRequest.getTrainNumberDetail, convertedRequest);
        const convertedResponse = convertResponseOfGetDetailAPI(response);

        yield put(SET_ON_PARENT_MODAL_DATA(convertedResponse));
        yield put(SET_MODAL_TYPE(true));

        yield put(SET_API_STATUS({ type: 'detail', code: HTTP_STATUS_CODE.OK }));
    } catch (error) {
        console.error(error);
        yield put(SET_API_STATUS({ type: 'detail', code: error }));
    } finally {
        yield put(SET_LOADING_STATE(false));
    }
}

function* MainSaga() {
    yield takeEvery(FETCH_SEARCH, fetchSearchUsers);
    yield takeEvery(FETCH_GET_OPTIONS, fetchGetOptions);
    yield takeEvery(FETCH_GET_DETAIL, fetchGetDetail);
}

export { MainSaga };
