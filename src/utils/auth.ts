import { API_AUTH_URL, AUTH_HEADER, DEFAULT_TIMEOUT, HTTP_PARAMETER } from '@configs/serviceConfig';
import axios from 'axios';
import ObjectUtils from './objectUtils';

export const getAuthorizationHeader = async () => {
    try {
        const res = await axios.post(API_AUTH_URL, HTTP_PARAMETER, AUTH_HEADER);
        const response = res.data;
        const tokenTime = new Date().getTime() + DEFAULT_TIMEOUT * 1000;

        localStorage.setItem('token', `Bearer ${response.access_token}`);
        localStorage.setItem('tokenTime', `${tokenTime}`);
    } catch (err) {
        console.error('取得 Access Token 失敗', err);
    }
};

export const handleCheckToken = async () => {
    const tokenValue = localStorage.getItem('token');
    const tokenTime = localStorage.getItem('tokenTime');
    const date = new Date();

    if (ObjectUtils.isExist(tokenValue)) {
        if (date.getTime() - Number(tokenTime) > 0) {
            removeToken();
            getAuthorizationHeader();
        }
    } else {
        getAuthorizationHeader();
    }
};

export const authHeader = () => {
    const token = localStorage.getItem('token');

    return { Authorization: token };
};

export const removeToken = () => {
    try {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenTime');
    } catch (err) {
        console.error(err);
    }
};
