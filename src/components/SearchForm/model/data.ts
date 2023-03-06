import { ApiStatus, SearchFormField, State } from './types';

export const searchFormField: SearchFormField = {
    startStationId: '',
    endStationId: '',
    trainDate: ''
};

export const initStatus: ApiStatus = {
    type: '',
    code: 0,
    dataId: '',
    data: '',
    mode: 'view'
};

export const initialState: State = {
    searchFormField,
    searchResult: [],
    apiStatus: initStatus,
    loadingState: false,
    options: []
};
