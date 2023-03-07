import { HTTP_STATUS_CODE } from '@configs/serviceConfig';
import { PayloadAction } from '@reduxjs/toolkit';
import ApiRequest from '@service/apiRequest';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    convertResponseOfGetOptionsAPI,
    convertResponseOfSearchAPI,
    getParametersOfSearchAPI
} from '../service/dataProcessing';
import {
    FETCH_GET_OPTIONS,
    FETCH_SEARCH,
    SET_API_STATUS,
    SET_LOADING_STATE,
    SET_OPTIONS,
    SET_SEARCH_RESULT
} from './index';

function* fetchSearchUsers(action: PayloadAction<any>) {
    try {
        yield put(SET_LOADING_STATE(true));
        const convertedRequest = getParametersOfSearchAPI(action.payload);
        const response: Promise<any> = yield call(ApiRequest.search, convertedRequest);
        const convertedResponse = convertResponseOfSearchAPI(response);

        yield put(SET_SEARCH_RESULT(convertedResponse));
        yield put(SET_API_STATUS({ type: 'search', code: HTTP_STATUS_CODE.OK }));
    } catch (error) {
        console.error(error);
        yield put(SET_API_STATUS({ type: 'search', code: error }));
        // yield put(
        //     SET_IS_STATUS_MODAL_OPEN({
        //         statusModalType: StatusModalTypes.FAIL,
        //         isOpen: true,
        //         message: error.errorMessage || '查詢失敗'
        //     })
        // );
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

function* MainSaga() {
    yield takeEvery(FETCH_SEARCH, fetchSearchUsers);
    yield takeEvery(FETCH_GET_OPTIONS, fetchGetOptions);
}

export { MainSaga };
