import {connectRouter} from 'connected-react-router';
import restaurantReducer from './slices/restaurantsSlice';

//alternative way to combineReducers
const createRootReducer = (history) => ({
    router: connectRouter(history),
    restaurants: restaurantReducer
});

// export default createRootReducer;