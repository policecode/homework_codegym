function check_account(str) {
    let regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}
let accountArr = ['123abc_', '_abc123', '______', '123456', 'abcdefg', '.@', '12345', '1234_', 'abcde'];
for (let i = 0; i < accountArr.length; i++) {
    if (check_account(accountArr[i])) {
        console.log(accountArr[i] + ' hợp lệ');
    } else {
        console.log( accountArr[i] + ' không hợp lệ');
    }
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}