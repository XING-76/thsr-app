class ObjectUtils {
    static isExist(string: any) {
        return string !== null && string !== undefined && string !== '';
    }

    static isEmptyObject(object: any) {
        for (var prop in object) {
            if (Object.prototype.hasOwnProperty.call(object, prop)) return false;
        }

        return JSON.stringify(object) === JSON.stringify({});
    }
}

export default ObjectUtils;
