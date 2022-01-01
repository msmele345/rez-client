import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import restaurantReducer from "../slices/restaurantsSlice";
import appReducer from "../slices/appSlice"
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {history} from "../history"
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSagas from "../rootSagas";

export const rootReducer = combineReducers({
    restaurants: restaurantReducer,
    app: appReducer,
    router: connectRouter(history)
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
);

sagaMiddleware.run(rootSagas);

export {store};



