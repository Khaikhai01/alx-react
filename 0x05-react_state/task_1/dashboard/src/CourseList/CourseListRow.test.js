import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react'; 
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {

  test('renders one cell with colSpan=2 when textSecondCell does not exist', () => {
    const textFirstCell = 'Header Cell';
    const wrapper = shallow(<CourseListRow isHeader textFirstCell={textFirstCell} />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
    expect(wrapper.find('th').text()).toBe(textFirstCell);
  });

  test('renders two cells when textSecondCell is present', () => {
    const textFirstCell = 'Header Cell 1';
    const textSecondCell = 'Header Cell 2';
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell={textFirstCell} textSecondCell={textSecondCell} />
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(1);
    expect(wrapper.find('th').text()).toBe(textFirstCell);
    expect(wrapper.find('td')).toHaveLength(1);
    expect(wrapper.find('td').text()).toBe(textSecondCell);
  });

  test('renders two td elements within a tr element', () => {
    const textFirstCell = 'Data Cell 1';
    const textSecondCell = 'Data Cell 2';
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell={textFirstCell} textSecondCell={textSecondCell} />
    );
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toBe(textFirstCell);
    expect(wrapper.find('td').at(1).text()).toBe(textSecondCell);
  });

  test('should render a regular row with correct Aphrodite background color style', () => {
    const { container } = render(<CourseListRow textFirstCell="Course A" textSecondCell="3" />);
    const row = container.querySelector('tr');

    expect(row).toHaveStyle('background-color: #f5f5f5ab;');
  });

  test('should render a header row with correct Aphrodite background color style', () => {
    const { container } = render(
      <CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Credit" />
    );
    const row = container.querySelector('tr');

    expect(row).toHaveStyle('background-color: #deb5b545;');
  });
});
