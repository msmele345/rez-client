import axios from "axios";

export const fetchRestaurants = () => {
    return axios({
        method: "get",
        url: "http://localhost:8080/api/v1/restaurants"
    })
};

export const fetchRestaurantsByBorough = (borough) => {
    console.log("BOROUGH", borough)
    return axios({
        method: "get",
        url: "http://localhost:8080/api/v1/restaurants",
        params: {
            borough: borough
        }
    })
};

export const fetchPageLoadRestaurants = () => {
    return axios.get("http://localhost:8080/api/v1/restaurants/random")
        .then(res => res)
        .catch(e => {
            throw new Error(e.message)
        })
}