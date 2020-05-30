import { combineReducers } from 'redux';
export const userReducer = (state = state.user, action) => {
    switch (action.type) {
        case 'addUser':
            const name = action.payload.user.name;
            return name;
        default:
            return state;
    }
}