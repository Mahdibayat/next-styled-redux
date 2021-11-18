import Type from "./types";

export const SetUser = user => ({
    type: Type.SET_USER,
    payload: user
})