function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return "";
    }
}
function removeLocalStorage(key) {
    localStorage.removeItem(key);
}
export default { setLocalStorage, getLocalStorage, removeLocalStorage }