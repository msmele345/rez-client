import React from "react";
import {render, screen} from '../../test-utils/testUtils';
import SearchRestaurantsForm from "./SearchRestaurantsForm";
import {fireEvent} from "@testing-library/react";

// var mockDispatch = jest.fn();
// jest.mock("react-redux", () => ({
//     useDispatch: mockDispatch
// }));
// jest.mock("react-redux");
describe("<SearchRestaurantForm>", () => {

    it('should render form to enter res borough of choice', function () {

        render(<SearchRestaurantsForm/>);

        let submitButton = screen.getByRole('button');

        expect(submitButton.value).toEqual("Search Restaurants");

        fireEvent.click(submitButton);
        //need fireevent select after changing menu selection
        // expect(mockDispatch).toBeCalledWith(setUserSubmit(false))
        expect(screen.getByText("Bronx")).toBeTruthy();
    });
});

