import React from "react";
import { shallow } from "enzyme"; 
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("should render CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);

    const availableCoursesHeaderRow = wrapper.find('CourseListRow[isHeader=true]');
    const courseNameHeaderRow = wrapper.find('CourseListRow[isHeader=true]').at(1);
    const es6DataRow = wrapper.find('CourseListRow').at(2);
    const webpackDataRow = wrapper.find('CourseListRow').at(3);
    const reactDataRow = wrapper.find('CourseListRow').at(4);

    expect(availableCoursesHeaderRow.exists()).toBe(true);
    expect(courseNameHeaderRow.exists()).toBe(true);
    expect(es6DataRow.exists()).toBe(true);
    expect(webpackDataRow.exists()).toBe(true);
    expect(reactDataRow.exists()).toBe(true);
  });
});
