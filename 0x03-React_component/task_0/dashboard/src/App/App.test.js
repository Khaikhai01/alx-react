import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe('<App />', () => {
    test('App renders without crashing', () => {
        shallow(<App />)
    });

    test('should contain the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications)).toHaveLength(1);

    })

    test('should contain the Header componenr', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toHaveLength(1);

    })

    test('should contain the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login)).toHaveLength(1);

    });

    test('should contain the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });

    test('does not render the CourseList component when isLoggedIn is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList).length).toBe(0);
      });

    describe('when isLoggedIn is true', () => {
      test('does not render the Login component', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login).length).toBe(0);
      });

      test('renders the CourseList component', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList).length).toBe(1);
      });
    });
})





