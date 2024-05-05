import { LOGIN, LOGOUT } from "./constant"

export const loginAction = (payload) => {
    return {
        type: LOGIN,
        user: payload
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT
    }
}

