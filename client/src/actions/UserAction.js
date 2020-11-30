import { SET_USER } from "./types";

export const setUser = (data) => async (dispatch) => {
    try {
        dispatch({ type: SET_USER, payload: data })
    } catch (error) {
        console.error(error);
    }
}