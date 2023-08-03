import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  it("renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist", () => {
    const isHeader = true;
    const textFirstCell = "Header Cell";

    const wrapper = shallow(<CourseListRow isHeader={isHeader} textFirstCell={textFirstCell} />);
    const thElement = wrapper.find("th");

    expect(thElement).toHaveLength(1);
    expect(thElement.prop("colSpan")).toBe(2);
    expect(thElement.text()).toBe(textFirstCell);
  });

  it("renders two cells when isHeader is true and textSecondCell is present", () => {
    const isHeader = true;
    const textFirstCell = "Header Cell 1";
    const textSecondCell = "Header Cell 2";

    const wrapper = shallow(
      <CourseListRow isHeader={isHeader} textFirstCell={textFirstCell} textSecondCell={textSecondCell} />
    );
    const thElements = wrapper.find("th");

    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toBe(textFirstCell);
    expect(thElements.at(1).text()).toBe(textSecondCell);
  });

  it("renders correctly with two td elements when isHeader is false", () => {
    const isHeader = false;
    const textFirstCell = "Data Cell 1";
    const textSecondCell = "Data Cell 2";

    const wrapper = shallow(
      <CourseListRow isHeader={isHeader} textFirstCell={textFirstCell} textSecondCell={textSecondCell} />
    );
    const tdElements = wrapper.find("td");

    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toBe(textFirstCell);
    expect(tdElements.at(1).text()).toBe(textSecondCell);
  });
});