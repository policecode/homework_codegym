function checkLengthString(value, minLength = 0) {
    if (value.trim().length < minLength) {
        return `Chuỗi không được ít hơn ${minLength} ký tự`;
    }
    return false;
}

function isExists(itemDetail, items, fields = {}) {
    /**
     * Kiểm tra một mảng và một obj đã tồn tại
     * - fields
     * + compare: filed xác định để kiểm tra đã tồn tại hay không
     * + primary: Khóa chính của mỗi phần tử
     */
    let isCheck = '';
    if (itemDetail[fields.primary]) {
        isCheck = items.find(value => value[fields.compare].toLowerCase() == itemDetail[fields.compare].toLowerCase()
        && value[fields.primary] != itemDetail[fields.primary]);
    } else {
        isCheck = items.find(value => value[fields.compare].toLowerCase() == itemDetail[fields.compare].toLowerCase());
    }

    if (isCheck) {
        return `Giá trị "${itemDetail[fields.compare]}" đã tồn tại`;
    }
    return false;
}
export default {checkLengthString, isExists}