import { LOGIN, LOGOUT, LOADINGSHOW, LOADINGHIDEN } from "./constant"

export const loginAction = (payload) => {
    return {
        type: LOGIN,
        payload: payload
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT
    }
}

export const loadingShow = () => {
    return {
        type: LOADINGSHOW
    }
}

export const loadingHiden = () => {
    return {
        type: LOADINGHIDEN
    }
}