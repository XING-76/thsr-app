import ObjectUtils from './objectUtils';

/**
 * 依照傳入 data 轉換為 url
 * @param parameters { curNum: 1, size: 5 }
 * @returns curNum=1&size=5
 */
export const getUrlByParameters = (parameters: Object) => {
    let array = [];
    for (const [key, value] of Object.entries(parameters)) {
        if (ObjectUtils.isExist(value)) array.push(`${key}=${value}`);
    }

    return array.join('&');
};
