import React from "react";
import { shallow } from "enzyme";
import DatosPersonales from "./DatosPersonales";

describe("DatosPersonales", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DatosPersonales />);
    expect(wrapper).toMatchSnapshot();
  });
});
