import React from "react";
import {render, screen} from '../../test-utils/testUtils';
import userEvent from "@testing-library/user-event";
import SearchRestaurantsForm from "./SearchRestaurantsForm";
import * as reactRedux from 'react-redux';
import {setUserSubmit} from "../../slices/appSlice";


jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
describe("<SearchRestaurantForm>", () => {

    let mockUseDispatch = reactRedux.useDispatch;

    beforeEach(() => {
        mockUseDispatch.mockImplementationOnce(() => () => {});
    });

    afterEach(() => {
        mockUseDispatch.mockClear();
    });


    it('should render form to enter res borough of choice', function () {

        render(<SearchRestaurantsForm/>);

        let submitButton = screen.getByRole('button');

        expect(submitButton.value).toEqual("Search Restaurants");

        userEvent.click(submitButton);
        //need firevent select after changing menu selection
        expect(mockUseDispatch).toBeCalledWith(setUserSubmit(true))
        expect(screen.getByText("Bronx")).toBeInTheDocument();
    });
});

