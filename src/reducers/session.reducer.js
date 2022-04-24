import { types } from "./types/types";
import uuid from 'react-uuid';
import data from './data/data';

export const id = uuid();

const initialState = {
    uuid: uuid(),
    data
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
                ...state
            };
    }
}
