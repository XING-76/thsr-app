import { API_AUTH_URL, API_KEY_ID, API_KEY_SECRET } from '@configs/serviceConfig';
import axios from 'axios';
import ObjectUtils from './objectUtils';

export const getAuthorizationHeader = async () => {
    const parameter = {
        grant_type: 'client_credentials',
        client_id: API_KEY_ID,
        client_secret: API_KEY_SECRET
    };

    try {
        const res = await axios.post(API_AUTH_URL, parameter, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const response = res.data;

        localStorage.setItem('token', `Bearer ${response.access_token}`);
    } catch (err) {
        console.error('取得 Access Token 失敗', err);
    }
};

export const checkAuth = () => {
    const tokenValue = localStorage.getItem('token');

    return ObjectUtils.isExist(tokenValue);
};

export const authHeader = () => {
    let token = localStorage.getItem('token');
    if (!ObjectUtils.isExist(token)) return new Object();
    return { Authorization: token };
};

export const removeToken = () => {
    try {
        localStorage.removeItem('token');
    } catch (err) {
        console.error(err);
    }
};
