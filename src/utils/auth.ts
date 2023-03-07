import { API_AUTH_URL, AUTH_HEADER, HTTP_PARAMETER } from '@configs/serviceConfig';
import axios from 'axios';
import ObjectUtils from './objectUtils';

export const getAuthorizationHeader = async () => {
    try {
        const res = await axios.post(API_AUTH_URL, HTTP_PARAMETER, AUTH_HEADER);
        const response = res.data;

        localStorage.setItem('token', `Bearer ${response.access_token}`);
    } catch (err) {
        console.error('取得 Access Token 失敗', err);
    }
};

export const handleCheckToken = async () => {
    const tokenValue = localStorage.getItem('token');

    if (ObjectUtils.isExist(tokenValue)) {
        try {
            await axios.post(API_AUTH_URL, HTTP_PARAMETER, AUTH_HEADER);
            return;
        } catch (err: any) {
            if (err.response && err.response.status === 401) {
                console.error('Token 已過期，重新取得中...');
            } else {
                console.error('請求失敗', err);
            }
        }
    }

    try {
        removeToken();
        const res = await axios.post(API_AUTH_URL, HTTP_PARAMETER, AUTH_HEADER);
        const response = res.data;
        const newToken = `Bearer ${response.access_token}`;

        localStorage.setItem('token', newToken);
    } catch (err) {
        console.error('取得 Access Token 失敗', err);
    }
};

export const authHeader = () => {
    const token = localStorage.getItem('token');

    return { Authorization: token };
};

export const removeToken = () => {
    try {
        localStorage.removeItem('token');
    } catch (err) {
        console.error(err);
    }
};
