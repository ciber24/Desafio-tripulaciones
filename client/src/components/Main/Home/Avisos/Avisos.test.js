import React from "react";
import { shallow } from "enzyme";
import Avisos from "./Avisos";

describe("Avisos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Avisos />);
    expect(wrapper).toMatchSnapshot();
  });
});
