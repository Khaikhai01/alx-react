import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("rendering components", () => {
  test("renders NotificationItem component without crashing", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual(
      '<li class="default">test</li>'
    );
  });

  test('renders correct html from html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: "<u>test</u>" });
    expect(wrapper.html()).toEqual(
      '<li class="urgent"><u>test</u></li>'
    );
  });
});

describe("onclick event behaves as it should", () => {
  test("should call console.log", () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
    wrapper.find("li").props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});
