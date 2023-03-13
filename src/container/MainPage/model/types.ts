export interface SearchFormField {
    startStationId: string;
    endStationId: string;
    trainDate: string;
}

export interface SearchResultData {
    trainDate: string;
    trainNumber: string;
    departureTime: string;
    arrivalTime: string;
    travelTime: string;
}

export interface ParentModalData {
    trainDate: string;
    trainNumber: string;
    direction: string;
    startStation: string;
    endStation: string;
    trainStop: Array<TrainStop>;
}

export interface TrainStop {
    sequence: string;
    arrivalTime: string;
    stationName: string;
}

export interface ApiStatus {
    type: string;
    code: number;
    dataId?: string;
    data?: string;
    mode?: string;
}

export interface Options {
    id: string;
    name: number;
}

export interface State {
    searchFormField: SearchFormField;
    searchResult: Array<SearchResultData>;
    parentModalData: ParentModalData;
    trainItem: SearchResultData;
    apiStatus: ApiStatus;
    modalType: boolean;
    loadingState: boolean;
    options: Array<Options>;
}
