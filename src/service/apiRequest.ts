import { API_GATEWAY_PREFIX, API_PREFIX, HTTP_METHOD, SERVICE_URL_CONFIG } from '@configs/serviceConfig';
import { httpRequest } from './httpRequest';

export default class ApiRequest {
    /**
     * 取得指定[日期]所有車次的車次資料
     * @param data
     * @returns
     */
    static searchAll(data: any) {
        return httpRequest({
            url: `${API_GATEWAY_PREFIX}${API_PREFIX}/${SERVICE_URL_CONFIG.DailyTrainInfo}/${SERVICE_URL_CONFIG.TrainDate}/${data}`,
            method: HTTP_METHOD.GET
        });
    }

    /**
     * 取得指定[日期],[起迄站間]之時刻表資料
     */
    static search(data: any) {
        const { OriginStationID, DestinationStationID, TrainDate } = data;
        return httpRequest({
            url: `${API_GATEWAY_PREFIX}${API_PREFIX}/${SERVICE_URL_CONFIG.DailyTimetable}/${SERVICE_URL_CONFIG.OD}/${OriginStationID}/${SERVICE_URL_CONFIG.to}/${DestinationStationID}/${TrainDate}`,
            method: HTTP_METHOD.GET
        });
    }

    /**
     * 取得車站基本資料
     */
    static getStationOptions() {
        return httpRequest({
            url: `${API_GATEWAY_PREFIX}${API_PREFIX}/${SERVICE_URL_CONFIG.Station}`,
            method: HTTP_METHOD.GET
        });
    }
}
