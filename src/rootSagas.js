import {all} from 'redux-saga/effects';
import restaurantSagas from "./sagas";

export default function* rootSagas() {
    yield all([
        ...restaurantSagas
    ])
};