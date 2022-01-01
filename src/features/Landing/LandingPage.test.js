import React from "react";
import {render, screen} from '../../test-utils/testUtils';
import LandingPage from "./LandingPage";

// let mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//     ...jest.requireActual("react-redux"),
//     useDispatch: mockDispatch
// }))
describe("<LandingPage>", () => {

    it('should ', function () {

        render(<LandingPage/>);

        expect(screen.getByRole('button').textContent).toEqual("View Restaurants");

    });
});
