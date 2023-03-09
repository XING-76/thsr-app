import { getMaxDay } from '@utils/dateUtil';
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

export const dateRestrict = {
    min: new Date().toISOString().slice(0, 10),
    max: getMaxDay()
};

export const tableTitle = [
    { id: 'title01', title: '車次' },
    { id: 'title02', title: '出發' },
    { id: 'title03', title: '到達' },
    { id: 'title04', title: '總時間' }
];
