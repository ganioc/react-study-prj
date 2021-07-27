import React from "react";
import "./Confirm.scss";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

class Confirm extends React.Component<IProps> {
  public static defaultProps = {
    cancelCaption: "Cancel",
    okCaption: "Okay",
  };
  public render() {
    return (
      <div
        className={
          this.props.open
            ? "confirm-wrapper confirm-visible"
            : "confirm-wrapper"
        }
      >
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{this.props.title} </span>
          </div>
          <div className="confirm-content-container">
            <p>{this.props.content}</p>
          </div>
          <div className="confirm-buttons-container">
            <button
              className="confirm-cancel"
              onClick={this.props.onCancelClick}
            >
              Cancel
            </button>
            <button className="confirm-ok" onClick={this.props.onOkClick}>
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
  //   private handleOkClick = () => {
  //     // console.log("Ok clicked", this.props);
  //     this.props.onOkClick();
  //   };
  //   private handleCancelClick = () => {
  //     // console.log("Cancel clicked");
  //     this.props.onCancelClick();
  //   };
}

export default Confirm;
