import { getTravelTime } from '@utils/dateUtil';
import { SearchFormField } from '../model/types';

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
 * 查詢 回傳欄位值轉換
 * @param response
 * @returns
 */
export const convertResponseOfSearchAPI = (response: any) => {
    const newData = response?.map((item: any) => {
        const {
            TrainDate,
            DailyTrainInfo: { TrainNo },
            OriginStopTime: { DepartureTime },
            DestinationStopTime: { ArrivalTime }
        } = item;

        const result = {
            trainDate: TrainDate,
            trainNumber: TrainNo,
            departureTime: DepartureTime,
            arrivalTime: ArrivalTime,
            travelTime: getTravelTime(DepartureTime, ArrivalTime)
        };

        return result;
    });

    return response !== null ? newData : [];
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

/**
 * 取得車次細節 請求參數欄位轉換
 * @param request
 * @returns
 */
export const getParametersOfGetDetailAPI = (request: any) => {
    const { trainDate, trainNumber } = request;

    return {
        TrainDate: trainDate,
        TrainNo: trainNumber
    };
};

/**
 * 取得車次細節 回傳欄位值轉換
 * @param response
 * @returns
 */
export const convertResponseOfGetDetailAPI = (response: any) => {
    const { TrainDate, DailyTrainInfo, StopTimes } = response[0];
    const { TrainNo, Direction, StartingStationName, EndingStationName } = DailyTrainInfo;
    const { Zh_tw: startStation } = StartingStationName;
    const { Zh_tw: endStation } = EndingStationName;

    const newData = StopTimes?.map((item: any) => {
        const {
            StopSequence,
            StationName: { Zh_tw },
            ArrivalTime
        } = item;

        const result = {
            sequence: StopSequence,
            arrivalTime: ArrivalTime,
            stationName: Zh_tw
        };

        return result;
    });

    const convertedData = {
        trainDate: TrainDate,
        trainNumber: TrainNo,
        direction: Direction ? '北上' : '南下',
        startStation,
        endStation,
        trainStop: newData
    };

    return response !== null ? convertedData : [];
};
