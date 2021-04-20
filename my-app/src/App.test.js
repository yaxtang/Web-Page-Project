import {shallow} from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import TestUtils from 'react-dom/test-utils'; // ES6
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import Gallery from './components/Gallery'
import About from './components/About'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});



it('Home renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
it('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
   var component = TestUtils.renderIntoDocument(
        <Login/>
    );

  var h2 = TestUtils.scryRenderedDOMComponentsWithClass(
       component, 'layout-default'
     );

	var h3 = TestUtils.scryRenderedDOMComponentsWithClass(
	       component, 'control'
     );
	var h4 = TestUtils.isDOMComponent(h3)
	var h5 = TestUtils.isDOMComponent(h2)
	
	expect(h4).toEqual(false);
	expect(h5).toEqual(false);

  // const email =this.email;
  // node.value = 'a@b.com';
  // const pw = this.pw;
  // pw.value = '123456789';
  // const button = this.button;
  // ReactTestUtils.Simulate.click(node);

});

it('Profile renders without crashing 2', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profile />, div);
  var component = TestUtils.renderIntoDocument(
        <Profile/>
    );

  var h2 = TestUtils.scryRenderedDOMComponentsWithClass(
       component, 'layout-default'
     );

	var h3 = TestUtils.scryRenderedDOMComponentsWithClass(
	       component, 'control'
     );
	var h4 = TestUtils.isDOMComponent(h3)
	var h5 = TestUtils.isDOMComponent(h2)
	
  expect(h4).toEqual(false);
  expect(h5).toEqual(false);

});


it('Profile render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
    var component = TestUtils.renderIntoDocument(
        <About/>
    );

    var test = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h2'

    );
    var h2 = TestUtils.scryRenderedDOMComponentsWithClass(
       component, 'box'
     );

  var h3 = TestUtils.scryRenderedDOMComponentsWithClass(
         component, 'media-left'
     );
  var h4 = TestUtils.isDOMComponent(h3)
   expect(h4).toEqual(false);



});


it('Gallery renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gallery />, div);
  var component = TestUtils.renderIntoDocument(
        <Gallery/>
    );
	
  var h2 = TestUtils.scryRenderedDOMComponentsWithClass(
       component, 'article'
     );


  expect(true, TestUtils.isCompositeComponentWithType(
   <Gallery/>, 'article'));
});
it('About renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
    var component = TestUtils.renderIntoDocument(
        <About/>
    );

    var h1 = TestUtils.scryRenderedDOMComponentsWithClass(
       component, 'h1'
    );
    var h4 = TestUtils.isDOMComponent(h1)
  
  expect(h4).toEqual(false);


});


it("renders an h1", function () {
    var component = TestUtils.renderIntoDocument(
        <Gallery />
    );

    var h1 = TestUtils.scryRenderedDOMComponentsWithTag(
       component, 'article'
    );

});


it('About renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
    var component = TestUtils.renderIntoDocument(
        <About/>
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h2'

    );
    var h2 = TestUtils.scryRenderedDOMComponentsWithClass(
       component, 'box'
     );

	var h3 = TestUtils.scryRenderedDOMComponentsWithClass(
	       component, 'media-left'
     );
	var h4 = TestUtils.isDOMComponent(h3)
	 expect(h4).toEqual(false);



});


it("Login test", function () {
    var component = TestUtils.renderIntoDocument(
        <App />
    );

    var h2 = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h1'
    );

});

describe('<Login/>', () => {
    const testValues = {
        username: 'a@b.com',
        password: '123456789',
        handleSubmit: jest.fn(),
    };

    it('Submit works', () => {

        const component = shallow(
            <Login {...testValues} />
        );
        component.find('#submitButton').simulate('click');
        expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
        expect(testValues.handleSubmit).toBeCalledWith({username: testValues.username, password: testValues.password});
    });
};
 