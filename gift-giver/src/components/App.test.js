import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

//Unit tests

it("rendors correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initializes the `state` with an empty array", () => {
  expect(app.state().gifts).toEqual([]);
});

it("adds a new gift to `state` when clicking the `add gift` button", () => {
  app.find(".btn-add").simulate("click");

  expect(app.state().gifts).toEqual([{ id: 1 }]);
});
