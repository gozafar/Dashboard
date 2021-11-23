import { COMMENTS, USER } from "./constant";

export const setUser = (payload) => ({ type: USER, payload: payload });

export const setComment = (payload) => ({ type: COMMENTS, payload: payload });
