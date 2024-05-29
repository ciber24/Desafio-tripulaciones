import React from "react";
import { shallow } from "enzyme";
import Interacciones from "./Interacciones";

describe("Interacciones", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Interacciones />);
    expect(wrapper).toMatchSnapshot();
  });
});
