import { combineReducers, createStore } from "redux";
import { sessionReducer } from "../reducers/session.reducer";

const reducers = combineReducers({
    session: sessionReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);