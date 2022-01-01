import React, {useEffect} from "react";
import RestaurantList from "../Restaurants/RestaurantsList";
import SearchRestaurantsForm from "../SearchRestaurants/SearchRestaurantsForm";
import {useDispatch} from "react-redux";
import {getAllRestaurantsRequest} from "../../actions/restaurants";

const LandingPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRestaurantsRequest())
    },[]);

    return (
        <div>
            <SearchRestaurantsForm/>
            <RestaurantList/>
        </div>
    );
};

export default LandingPage;

//dispatch the action creator with the value from the form as another prop
// useEffect(() => {
//     dispatch(getRestaurantsRequest("Bronx"));
// }, [dispatch]);