import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {getRestaurantsRequest} from "../../actions/restaurants";
import {setUserSubmit} from "../../slices/appSlice";


const SearchRestaurantsForm = () => {

    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log("FORM",data)
        dispatch(setUserSubmit(true));
        dispatch(getRestaurantsRequest(data.borough));
    }

    return (
        <div className="searchForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("borough")}>
                    <option value="Bronx">Bronx</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Staten Island">Staten Island</option>
                    <option value="Queens">Queens</option>
                    <option value="Brooklyn">Brooklyn</option>
                </select>
                <input type="submit" value={"Search Restaurants"} />
            </form>
        </div>
    )
};

export default SearchRestaurantsForm;