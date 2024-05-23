import React from "react";
import { shallow } from "enzyme";
import Servicios from "./Servicios";

describe("Servicios", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Servicios />);
    expect(wrapper).toMatchSnapshot();
  });
});
