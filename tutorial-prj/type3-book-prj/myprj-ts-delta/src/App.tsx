import React from "react";
import logo from "./logo.svg";
// import "./custom.scss";
import "./App.css";
import Confirm from "./component/Confirm";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1>React and Typescript</h1>
        <p>This is a test only.</p>
        <Confirm
          title="Demo dialog"
          content="Let's choose if want to proceed with current setting."
          onOkClick={this.handleOkConfirmClick}
          onCancelClick={this.handleCancelConfirmClick}
        />
      </div>
    );
  }
  private handleCancelConfirmClick = () => {
    console.log("Cancel clicked");
  };
  private handleOkConfirmClick = () => {
    console.log("Ok clicked");
  };
}

export default App;
