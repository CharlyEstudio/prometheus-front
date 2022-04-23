import { types } from "./types/types";
import uuid from 'react-uuid';

export const id = uuid();

const initialState = {
    uuid: uuid(),
    name: 'Carlos Ramirez',
    email: 'pingestudio@gmail.com',
    rol: 'Software Developer Senior'
};

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.session:
            return {
                uuidSession: id
            };
        case types.developer:
        default:
            return {
                uuidSession: id,
                state
            };
    }
}
