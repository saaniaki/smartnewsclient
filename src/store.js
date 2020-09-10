import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {news} from "./components/reducers";

const reducers = {
    news
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

