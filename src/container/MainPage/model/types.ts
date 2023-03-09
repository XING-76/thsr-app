export interface SearchFormField {
    startStationId: string;
    endStationId: string;
    trainDate: string;
}

export interface SearchResultData {
    trainNumber: string;
    departureTime: string;
    arrivalTime: string;
    travelTime: string;
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
    loadingState: boolean;
    searchResult: Array<SearchResultData>;
    apiStatus: ApiStatus;
    options: Array<Options>;
}
