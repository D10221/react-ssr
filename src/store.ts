import { applyMiddleware, combineReducers, createStore, Reducer, Dispatch } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchCircuits } from "./api";

export const initializeSession = () => ({
    type: "INITIALIZE_SESSION",
});

const storeData = (data: any) => ({
    type: "STORE_DATA",
    data,
});

export const fetchData = () => (dispatch: Dispatch) =>
    fetchCircuits().then(res => dispatch(storeData(res)));

const sessionReducer: Reducer = (state = false, action) => {
    switch (action.type) {
        case "INITIALIZE_SESSION":
            return true;
        default: return state;
    }
};

const dataReducer: Reducer = (state = [], action) => {
    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default: return state;
    }
};

const reducer = combineReducers({
    loggedIn: sessionReducer,
    data: dataReducer,
});

export default (initialState?: any) =>
    createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
