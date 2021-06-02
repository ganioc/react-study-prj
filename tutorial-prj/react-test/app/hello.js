import React from 'react'

// var HelloWorld = React.createClass({
class HelloWorld extends React.Component {

    constructor(props){
        super(props);
        this.state = {name:"Default Name"}
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2 className="subheading">{this.props.name}</h2>
            </div>
        );
    }
}
export default HelloWorld;