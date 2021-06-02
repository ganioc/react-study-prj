// import React from 'react';
var React = require('react')
// import TestUtils from 'react-addons-test-utils';

// let HelloWorld  = require('../app/hello')
// var HelloWorld = require('../app/hello')

describe("renderIntoDocument", () => {

    it("should render the component", function () {
        // notice how we don't have to specify a dom element to insert the
        //  component into (unlike React.renderComponent)?
        //  This is because 'renderIntoDocument' renders into a detached DOM node.
        let a = 1;
        expect(a).toBe(1);
    });

    // afterAll(() => {

    // });
});
