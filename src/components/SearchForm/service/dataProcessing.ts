import { SearchFormField } from '../model/types';

/**
 * 查詢 回傳欄位值轉換
 * @param response
 * @returns
 */
export const convertResponseOfSearchAPI = (response: any) => {
    const newData = response?.map((item: any) => {
        const {
            DailyTrainInfo: { TrainNo },
            OriginStopTime: { DepartureTime },
            DestinationStopTime: { ArrivalTime }
        } = item;

        const result = {
            trainNumber: TrainNo,
            startTime: DepartureTime,
            endTime: ArrivalTime
        };

        return result;
    });

    return response !== null ? newData : [];
};

/**
 * 查詢 請求參數欄位轉換
 * @param request
 * @returns
 */
export const getParametersOfSearchAPI = (request: SearchFormField) => {
    const { startStationId, endStationId, trainDate } = request;

    return {
        OriginStationID: startStationId,
        DestinationStationID: endStationId,
        TrainDate: trainDate
    };
};

/**
 * 取得車站基本資料 回傳欄位值轉換
 * @param response
 * @returns
 */
export const convertResponseOfGetOptionsAPI = (response: any) => {
    const newData = response?.map((item: any) => {
        const {
            StationID,
            StationName: { Zh_tw }
        } = item;

        const result = {
            id: StationID,
            name: Zh_tw
        };

        return result;
    });

    return response !== null ? newData : [];
};
