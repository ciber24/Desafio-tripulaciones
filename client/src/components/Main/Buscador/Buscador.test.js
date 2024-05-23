import React from "react";
import { shallow } from "enzyme";
import Buscador from "./Buscador";

describe("Buscador", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Buscador />);
    expect(wrapper).toMatchSnapshot();
  });
});
