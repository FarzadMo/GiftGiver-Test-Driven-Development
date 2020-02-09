import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

//Unit test

it("rendors correctly", () => {
  expect(app).toMatchSnapshot();
});
