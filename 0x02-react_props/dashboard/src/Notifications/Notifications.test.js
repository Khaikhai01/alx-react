import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

test('Notifications renders without crashing', () => {
  const wrap = shallow(<Notifications />);
  expect(wrap.exists()).toBe(true);
});

test('Notifications renders three list items', () => {
  const wrap = shallow(<Notifications />);
  const listItems = wrap.find('li');
  expect(listItems.length).toBe(3);
});

test('Notifications renders the text "Here is the list of notifications"', () => {
    const wrap = shallow(<Notifications />);
    const textElement = wrap.find('p').contains('Here is the list of notifications');
    expect(textElement).toBe(true);
  });
  
