import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';


describe('<NotificationItem />', () => {
    test('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    test('render corrct HTML when type and value props are passed', () =>{
        const wrapper = shallow(<NotificationItem type='default' value='test' />);
        const liElement = wrapper.find('li[data-notification-type]');
        expect(liElement.prop('data-notification-type')).toBe('default');
        expect(liElement.text()).toBe('test');
    })

    test('renders correct HTML when htm prop is passed', () => {
        const wrapper = shallow(
            <NotificationItem type='default' html={{ __html: '<u>test</u>' }} />
        );
        const liElement = wrapper.find('li[data-notification-type]');
        expect(liElement.prop('data-notification-type')).toBe('default');
        expect(liElement.html()).toBe('<li data-notification-type="default"><u>test</u></li>');

    });
    
    test('calls markAsRead function with the correct id when clicked', () => {
        const markAsReadMock = jest.fn(); // Create a spy (mock function)
        const id = 123;
        const wrapper = shallow(
          <NotificationItem type="default" value="test" id={id} markAsRead={markAsReadMock} />
        );
        const liElement = wrapper.find('li[data-notification-type]');
        liElement.simulate('click'); // Simulate a click event
        expect(markAsReadMock).toHaveBeenCalledWith(id); // Check if the spy was called with the correct ID argument
      });
});