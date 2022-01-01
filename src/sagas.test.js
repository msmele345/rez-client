import {expectSaga, testSaga} from 'redux-saga-test-plan';
import {pageLoadWorker, workerSaga} from "./sagas";
import * as matchers from 'redux-saga-test-plan/matchers';
import {call} from 'redux-saga/effects';
import {fetchPageLoadRestaurants, fetchRestaurantsByBorough} from './api/restaurantsApi';
import {postRestaurants} from "./slices/restaurantsSlice";

jest.mock("./api/restaurantsApi");
describe('Runs the saga', () => {

    const restaurants = [
        {
            "_id": "1",
            "address": {
                "building": "351",
                "coord": [-73.98513559999999, 40.7676919],
                "street": "West   57 Street",
                "zipcode": "10019"
            },
            "borough": "Brooklyn",
            "cuisine": "Irish",
            "grades": [{"date": "2014-09-06T00:00:00Z", "grade": "A", "score": 2}, {
                "date": "2013-07-22T00:00:00Z",
                "grade": "A",
                "score": 11
            }, {"date": "2012-07-31T00:00:00Z", "grade": "A", "score": 12}, {
                "date": "2011-12-29T00:00:00Z",
                "grade": "A",
                "score": 12
            }],
            "name": "Dj Reynolds Pub And Restaurant",
            "restaurant_id": "30191841"
        },
        {
            "_id": "2",
            "address": {
                "building": "469",
                "coord": [-73.961704, 40.662942],
                "street": "Flatbush Avenue",
                "zipcode": "11225"
            },
            "borough": "Brooklyn",
            "cuisine": "Hamburgers",
            "grades": [{"date": "2014-12-30T00:00:00Z", "grade": "A", "score": 8}, {
                "date": "2014-07-01T00:00:00Z",
                "grade": "B",
                "score": 23
            }, {"date": "2013-04-30T00:00:00Z", "grade": "A", "score": 12}, {
                "date": "2012-05-08T00:00:00Z",
                "grade": "A",
                "score": 12
            }],
            "name": "Wendy'S",
            "restaurant_id": "30112340"
        }
    ];
    const requestAction = {borough: "Brooklyn"};

    it('should do the thing', function () {

        testSaga(workerSaga, requestAction)
            .next()
            .put({type: "app/setIsLoading", payload: true})
            .next()
            .call(fetchRestaurantsByBorough, "Brooklyn")
            .next({data: restaurants})
            .put({type: 'API_CALL_SUCCESS', payload: {restaurants: restaurants}})
            .next()
            .put({type: 'restaurants/postRestaurants', payload: [...restaurants]})
            .next()
            .put({type: "app/setIsLoading", payload: false})
            .next()
            .isDone();
    });

    it('should put details about the error is the saga fails', function () {

        let error = new Error("Something bad");

        testSaga(workerSaga, requestAction)
            .next()
            .put({type: "app/setIsLoading", payload: true})
            .next()
            .call(fetchRestaurantsByBorough, "Brooklyn")
            .throw(error)
            .put({type: 'restaurants/restaurants_error', payload: 'Something bad'})
            .next()
            .isDone();
    });

    it('GET_ALL_RESTAURANTS SAGA for PAGE LOAD', function () {

        testSaga(pageLoadWorker)
            .next()
            .put({type: "app/setIsLoading", payload: true})
            .next()
            .call(fetchPageLoadRestaurants)
            .next({data: restaurants})
            .put({type: "restaurants/pageLoadSuccess", payload: {restaurants: restaurants}})
            .next()
            .put({type: "restaurants/loadLandingRestaurants", payload: [...restaurants]})
            .next()
            .put({type: "app/setIsLoading", payload: false})
            .next()
            .isDone();

    });

    it('pageLoad - puts ERROR details to store upon api call failure ', function () {

        let pageLoadError = new Error("Page Load Failed Due To Server Error");

        testSaga(pageLoadWorker)
            .next()
            .put({type: "app/setIsLoading", payload: true})
            .next()
            .call(fetchPageLoadRestaurants)
            .throw(pageLoadError)
            .put({type: 'restaurants/restaurants_error', payload: 'Page Load Failed Due To Server Error'})
            .next()
            .isDone();
    });

    it('should call the api and put the response', function () {

        expectSaga(workerSaga, requestAction)
            // .dispatch({type: "API_CALL_REQUEST", borough: "Brooklyn"})
            .provide([
                // [call(fetchRestaurantsByBorough, requestAction), restaurants],
                [matchers.call.fn(fetchRestaurantsByBorough), restaurants]
            ])
            .put({type: 'API_CALL_SUCCESS', payload: {restaurants: []}})
            .run()
    });


    it('with reducer', function () {

        expectSaga(workerSaga, requestAction)
            .withReducer(postRestaurants)
            .provide([
                [call(fetchRestaurantsByBorough, requestAction), restaurants]
                // [matchers.call.fn(fetchRestaurantsByBorough), restaurants]
            ])
            .hasFinalState({
                restaurants: restaurants
            })
            // .dispatch({type: "API_CALL_REQUEST", borough: "Brooklyn"})
            .run()
    });
});
