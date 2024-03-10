function is_usZipCode(str) {
    let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}
let zipcodeArr = ['03201-2150', '96799', '7892', '71601-72959'];
for (let i = 0; i < zipcodeArr.length; i++) {
    if (is_usZipCode(zipcodeArr[i])) {
        console.log(zipcodeArr[i] + ' is US zip code');
    } else {
        console.log( zipcodeArr[i] + ' is not US zip code');
    }
}