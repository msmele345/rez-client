export const Types = {
    // GET_RESTAURANTS_SUCCESS: "restaurants/get_restaurants_success",
    GET_RESTAURANTS_SUCCESS: "API_CALL_SUCCESS",
    SET_USER_SUBMIT: "app/user-submit",
    GET_RESTAURANTS_REQUEST: "API_CALL_REQUEST",
    GET_ALL_RESTAURANTS_REQUEST: "restaurants/pageLoadRequest",
    GET_ALL_RESTAURANTS_SUCCESS: "restaurants/pageLoadSuccess",
    RESTAURANTS_ERROR: 'restaurants/restaurants_error'
}

export const getRestaurantsRequest = (borough) => ({
    type: Types.GET_RESTAURANTS_REQUEST,
    borough: borough
});

export const getAllRestaurantsRequest = () => ({
   type : Types.GET_ALL_RESTAURANTS_REQUEST
});

export const getAllRestaurantsSuccess = (restaurants) => ({
    type: Types.GET_ALL_RESTAURANTS_SUCCESS,
    payload: {
        restaurants
    }
});

export const getRestaurantsSuccess = ({restaurants}) => ({
    type: Types.GET_RESTAURANTS_SUCCESS,
    payload: {
        restaurants
    }
});

export const setUserSubmit = () => ({

});