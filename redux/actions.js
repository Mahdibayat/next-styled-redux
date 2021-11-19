import Type from "./types";

export const SetTheme = theme => ({
    type: Type.SET_THEME,
    payload: theme
})

export const SetUser = user => ({
    type: Type.SET_USER,
    payload: user
})