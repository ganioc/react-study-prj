import React from 'react';
//var React = require('react')
// import TestUtils from 'react-addons-test-utils';
// var ReactTestUtils = require('react-addons-test-utils') // ES5 with npm
// var TestUtils = React.addons.TestUtils;
// let HelloWorld  = require('../app/hello')
// var HelloWorld = require('../app/hello')
import HelloWorld from '../app/hello'
import ReactTestUtils  from 'react-dom/test-utils'


describe("renderIntoDocument", () => {

    it("should render the component", function () {
        // notice how we don't have to specify a dom element to insert the
        //  component into (unlike React.renderComponent)?
        //  This is because 'renderIntoDocument' renders into a detached DOM node.
        let element = ReactTestUtils.renderIntoDocument(<HelloWorld />);
        expect(element).toBeTruthy();
    });

    // afterAll(() => {

    // });
});
