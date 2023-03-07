export const API_KEY_ID = import.meta.env.VITE_API_KEY_ID;
export const API_KEY_SECRET = import.meta.env.VITE_API_KEY_SECRET;
export const API_GATEWAY_PREFIX = import.meta.env.VITE_API_GATEWAY_PREFIX;
export const API_PREFIX = import.meta.env.VITE_API_PREFIX;
export const API_AUTH_URL = import.meta.env.VITE_API_AUTH_URL;

export const DEFAULT_TIMEOUT = import.meta.env.VITE_DEFAULT_TIMEOUT;

export const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

export const HTTP_STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NO_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

export const HTTP_PARAMETER = {
    grant_type: 'client_credentials',
    client_id: API_KEY_ID,
    client_secret: API_KEY_SECRET
};

export const AUTH_HEADER = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export const SERVICE_URL_CONFIG = {
    DailyTimetable: 'DailyTimetable',
    OD: 'OD',
    to: 'to',
    DailyTrainInfo: 'DailyTrainInfo',
    TrainDate: 'TrainDate',
    Station: 'Station'
};
