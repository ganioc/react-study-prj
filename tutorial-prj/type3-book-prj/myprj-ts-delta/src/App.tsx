import React from "react";
import logo from "./logo.svg";
// import "./custom.scss";
import "./App.css";
import Confirm from "./component/Confirm";

function App() {
  return (
    <div className="App">
      <h1>React and Typescript</h1>
      <p>This is a test only.</p>
      <Confirm
        title="Demo dialog"
        content="Let's choose if want to proceed with current setting."
      />
    </div>
  );
}

export default App;
