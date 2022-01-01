import React from "react";
import {render, screen} from '../../test-utils/testUtils';
import RestaurantList from "./RestaurantsList";

describe('<RestaurantList>', function () {

    const setup = (isUserSubmit = false) => {
        render(<RestaurantList/>, {
            preloadedState: {
                restaurants: [
                    {"_id" : "1", "id": "SomeId1", "address" : {"building" : "351", "coord" : [-73.98513559999999, 40.7676919], "street" : "West   57 Street", "zipcode" : "10019"}, "borough" : "Manhattan", "cuisine" : "Irish", "grades" : [{"date" : "2014-09-06T00:00:00Z", "grade" : "A", "score" : 2}, {"date" : "2013-07-22T00:00:00Z", "grade" : "A", "score" : 11}, {"date" : "2012-07-31T00:00:00Z", "grade" : "A", "score" : 12}, {"date" : "2011-12-29T00:00:00Z", "grade" : "A", "score" : 12}], "name" : "Dj Reynolds Pub And Restaurant", "restaurant_id" : "30191841"},
                    {"_id": "2","id": "SomeId2", "address": {"building": "469", "coord": [-73.961704, 40.662942], "street": "Flatbush Avenue", "zipcode": "11225"}, "borough": "Brooklyn", "cuisine": "Hamburgers", "grades": [{"date": "2014-12-30T00:00:00Z", "grade": "A", "score": 8}, {"date": "2014-07-01T00:00:00Z", "grade": "B", "score": 23}, {"date": "2013-04-30T00:00:00Z", "grade": "A", "score": 12}, {"date": "2012-05-08T00:00:00Z", "grade": "A", "score": 12}], "name": "Wendy'S", "restaurant_id": "30112340"}
                ],
                app: {
                    isUserSubmit: isUserSubmit
                }
            }
        });
    };

    it('Render Title ', function () {
        setup();

        expect(screen.getByText(/Available Restaurants/i)).toBeTruthy();
        expect(screen.getByText(/Irish/i));
        expect(screen.getByText(/Wendy'S/i)).toBeTruthy();
        expect(screen.getByText(/Dj Reynolds Pub And Restaurant/i)).toBeTruthy();
        expect(screen.getByText(/Brooklyn/i)).toBeTruthy();
    });

    it('should render Trending Restaurants when userSubmit is not enabled', function () {
        setup();

        expect(screen.getByText(/trending/i)).toBeInTheDocument();
    });
});