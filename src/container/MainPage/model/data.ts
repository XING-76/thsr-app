import { getMaxDay } from '@utils/dateUtil';
import { ApiStatus, SearchFormField, SearchResultData, State } from './types';

export const searchFormField: SearchFormField = {
    startStationId: '',
    endStationId: '',
    trainDate: ''
};

export const parentModalData = {
    trainDate: '',
    trainNumber: '',
    direction: '',
    startStation: '',
    endStation: '',
    trainStop: []
};

export const searchResultData: SearchResultData = {
    trainDate: '',
    trainNumber: '',
    departureTime: '',
    arrivalTime: '',
    travelTime: ''
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
    parentModalData,
    trainItem: searchResultData,
    apiStatus: initStatus,
    modalType: false,
    loadingState: false,
    options: []
};

export const dateRestrict = {
    min: new Date().toISOString().slice(0, 10),
    max: getMaxDay()
};

export const tableTitle = [
    { id: '0001', title: '車次' },
    { id: '0002', title: '出發' },
    { id: '0003', title: '到達' },
    { id: '0004', title: '總時間' }
];
