import {call, put, takeLatest, fork} from "redux-saga/effects";
import {loadLandingRestaurants, postRestaurants} from "./slices/restaurantsSlice";
import * as Api from "./api/restaurantsApi";
import {getAllRestaurantsSuccess, getRestaurantsSuccess, Types} from "./actions/restaurants"

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest(Types.GET_RESTAURANTS_REQUEST, workerSaga);
}

export function* workerSaga(action) {
    try {
        const response = yield call(Api.fetchRestaurantsByBorough, action.borough);

        console.log("RESPONSE", response);
        const restaurants = response.data;

        //this is the action/put dispatch way
        yield put(getRestaurantsSuccess({restaurants: restaurants}));
        //put with redux toolkit actions
        yield put(postRestaurants(restaurants));
    } catch (error) {
        yield put({type: "API_CALL_FAILURE", error});
    }
}

export function* pageLoadWatcherSaga() {
    yield takeLatest(Types.GET_ALL_RESTAURANTS_REQUEST, pageLoadWorker)

}

export function* pageLoadWorker() {
    try {
        const response = yield call(Api.fetchPageLoadRestaurants);
        console.log("PAGE LOAD RESPONSE", response);

        const restaurants = response.data;
        console.log("PAGE LOAD DATA", restaurants);

        yield put(getAllRestaurantsSuccess(restaurants))
        yield put(loadLandingRestaurants(restaurants));
    } catch (error) {
        yield put({type: "API_CALL_FAILURE", error})
    }
};

const restaurantSagas = [
    fork(pageLoadWatcherSaga),
    fork(watcherSaga)
];

export default restaurantSagas;