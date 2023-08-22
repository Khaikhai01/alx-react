import { bindActionCreators } from "redux";
import { 
    LOGIN, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    LOGOUT, 
    DISPLAY_NOTIFICATION_DRAWER, 
    HIDE_NOTIFICATION_DRAWER 
} from "./uiActionTypes";

export function login(email, password) {
    return {
        type: LOGIN,
        payload: {
            user: {
                email,
                password
            }
        }
    };
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}

export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
}

export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
}


export function loginRequest(email, password) {
    return async (dispatch) => {
        dispatch(login(email, password));

        try {
            const response = await fetch('/api/login-success.json');
            if (response.ok) {
                dispatch(loginSuccess());
            } else {
                dispatch(loginFailure());
            }
        } catch (error) {
            dispatch(loginFailure());
        }
    };
}

export const login = bindActionCreators(login, dispatch);
export const logout = bindActionCreators(logout, dispatch);
export const displayNotificationDrawer = bindActionCreators(
    displayNotificationDrawer, 
    dispatch
    );
export const hideNotificationDrawer = bindActionCreators(
    hideNotificationDrawer, 
    dispatch
    );
export const boundLoginRequest = bindActionCreators(
    loginRequest,
     dispatch
    );