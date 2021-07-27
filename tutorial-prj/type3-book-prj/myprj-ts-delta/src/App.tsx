import React from "react";
// import logo from "./logo.svg";
// import "./custom.scss";
import "./App.css";
import Confirm from "./component/Confirm";

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number;
}

class App extends React.Component<{}, IState> {
  private timer: number = 0;
  private renderCount: number = 0;

  private handleTimerTick() {
    this.setState(
      {
        confirmMessage: `Please hit the confirm button ${this.state.countDown} secs to go`,
        countDown: this.state.countDown - 1,
      },
      () => {
        if (this.state.countDown <= 0) {
          clearInterval(this.timer);
          this.setState({
            confirmMessage: "Too late to confirm",
            confirmVisible: false,
          });
        }
      }
    );
  }
  private handleOkConfirmClick = () => {
    console.log("Ok clicked");
    this.setState({
      confirmOpen: false,
      confirmMessage: "Cool, carry on reading",
    });
    clearInterval(this.timer);
  };
  private handleCancelConfirmClick = () => {
    console.log("Cancel clicked");
    clearInterval(this.timer);
  };
  private handleConfirmClick = () => {
    this.setState({
      confirmOpen: true,
      confirmMessage: "Take a break, I'm sure you will later ...",
    });
    clearInterval(this.timer);
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: false,
      confirmMessage: "Please hit the confirm button:",
      confirmVisible: true,
      countDown: 10,
    };
  }
  public render() {
    return (
      <div className="App">
        <h1>React and Typescript</h1>
        <p>This is a test only.</p>
        <p>{this.state.confirmMessage}</p>

        {this.state.confirmVisible && (
          <button onClick={this.handleConfirmClick}>Confirm</button>
        )}
        <Confirm
          open={this.state.confirmOpen}
          title="Demo dialog"
          content="Let's choose if want to proceed with current setting."
          onOkClick={this.handleOkConfirmClick}
          onCancelClick={this.handleCancelConfirmClick}
        />
      </div>
    );
  }

  public componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerTick(), 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.timer);
  }

  public static getDerivedStateFromProps(props: {}, state: IState) {
    console.log("getDerivedStateFromProps", props, state);
    return null;
  }
  public getSnapshotBeforeUpdate(prevProps: {}, prevState: IState) {
    this.renderCount += 1;
    console.log("getSnapshotBeforeUpdate", prevProps, prevState, {
      renderCount: this.renderCount,
    });
    return this.renderCount;
  }
  public componentDidUpdate(
    prevProps: {},
    prevState: IState,
    snapshot: number
  ) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot, {
      renderCount: this.renderCount,
    });
  }
}

export default App;
