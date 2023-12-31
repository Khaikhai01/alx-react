import { bindActionCreators } from "redux";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export function markAsAread(index) {
    return {
        type: MARK_AS_READ,
        payload: { index }
    };
}

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        payload: {filter}
    };
}

export const markAsAread = bindActionCreators(markAsAread, dispatch);
export const setNotificationFilter = bindActionCreators(
    setNotificationFilter, 
    dispatch
    );