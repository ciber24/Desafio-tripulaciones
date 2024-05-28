import React from "react";
import { shallow } from "enzyme";
import Contratos from "./Contratos";

describe("Contratos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Contratos />);
    expect(wrapper).toMatchSnapshot();
  });
});
