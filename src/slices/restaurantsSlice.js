import {createSlice} from '@reduxjs/toolkit'

const initialState = [];

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        addRestaurant(state, action) {
            return [...state, ...action.payload]
        },
        loadLandingRestaurants(state, action) {
            return [...state, ...action.payload]
        },
        postRestaurants(state, action) {
            state = [...action.payload]
            // return [...state, ...action.payload]
            return state;
        },
        clearRestaurants(state, action) {
            return initialState;
        }
    }
});

//export const actions
export const {
    addRestaurant,
    postRestaurants,
    clearRestaurants,
    loadLandingRestaurants
} = restaurantsSlice.actions;

//export reducer for the store
export default restaurantsSlice.reducer;