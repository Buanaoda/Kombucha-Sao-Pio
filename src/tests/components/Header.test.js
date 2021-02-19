import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should call startlog out for button click', () => {
  const startLogOut = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogOut}/>);
  wrapper.find('button').simulate('click', {
    preventDefault: () => {}
  });
  expect(startLogOut).toHaveBeenCalled();
});