import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment/index";

afterEach(cleanup);

describe("Appointment", () => {
  it("render without crashing", () => {
    render(<Appointment />);
  });
});
