import React from 'react';
import ReactDOM from 'react-dom'
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
        pending("Render into OK")
    });

    it("should render the component and it's html into a dom node", ()=>{
        let myComponent = ReactTestUtils.renderIntoDocument(<HelloWorld />)

        expect(ReactDOM.findDOMNode(myComponent).textContent).toContain("Hello World!")
    });
    it("should render the component and return the component as the return value", ()=>{
        let myComponent = ReactTestUtils.renderIntoDocument(<HelloWorld name="Bleeding"/>)

        expect(myComponent.props.name).toBe("Bleeding")
    })
    it("should not put the component into the DOM", ()=>{
        let myComponent = ReactTestUtils.renderIntoDocument(<HelloWorld />)

        expect(ReactDOM.findDOMNode(myComponent).offsetWidth).toBe(0)
        expect(ReactDOM.findDOMNode(myComponent).offsetHeight).toBe(0)
    });
    it("can have finder methods run against it", ()=>{
        let myComponent = ReactTestUtils.renderIntoDocument(<HelloWorld name="Bleading"/>)

        let mySubheading = ReactTestUtils.findRenderedDOMComponentWithClass(myComponent, "subheading");

        expect(ReactDOM.findDOMNode(mySubheading).innerHTML).toBe("Bleading")
    });
    it("should never pass if you try to assert on a whole dom node", ()=>{
        let myComponent = ReactTestUtils.renderIntoDocument(<HelloWorld name="Bleading"/>)

        // expect(ReactDOM.findDOMNode(myComponent).innerHTML).toBe("Bleading")
    })
});
