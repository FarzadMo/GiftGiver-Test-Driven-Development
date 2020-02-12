import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  const gift = shallow(<Gift />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes a person and a present in a `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  describe("when typing into the person input", () => {
    const person = "Uncle";

    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });

    it("updaes the person in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });
});