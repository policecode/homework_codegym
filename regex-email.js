function is_email(str) {
    let regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}
let emailArr = ['a@gmail.com', 'ab@yahoo.com', 'abc@hotmail.com', '@gmail.com', 'ab@gmail.', '@#abc@gmail.com'];
for (let i = 0; i < emailArr.length; i++) {
    if (is_email(emailArr[i])) {
        console.log(emailArr[i] + ' is email');
    } else {
        console.log( emailArr[i] + ' is not email');
    }
}