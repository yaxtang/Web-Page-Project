import React from 'react';
import {shallow} from 'enzyme';
import LogIn from '../Login';

describe('<LogIn />', () => {
    const testValues = {
        username: 'FOO',
        password: 'BAZ',
        handleSubmit: jest.fn(),
    };

    it('Submit works', () => {

        const component = shallow(
            <LogIn {...testValues} />
        );
        component.find('#submitButton').simulate('click');
        expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
        expect(testValues.handleSubmit).toBeCalledWith({username: testValues.username, password: testValues.password});
    });
});