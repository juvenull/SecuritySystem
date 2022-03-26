﻿const TOGGLE_THEME = 'TOGGLE_THEME';

const initialState = {
    theme: localStorage.getItem('theme') || 'light'
};

export const actionCreators = {
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === TOGGLE_THEME) {
        return {
            ...state,
            theme: action.data
        }
    }

    return state;
};