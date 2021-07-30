import React from "react";
import ContactUs from "./ContactUs";
import { ISubmitResult, IValues } from "./Form";
import { my_wait } from "./ProductsData";

interface IState {
  name: string;
  email: string;
  reason: string;
  notes: string;
}
class ContactUsPage extends React.Component<{}, IState> {
  private handleNameChange = (name: string) => {
    this.setState({ name });
  };
  private handleEmailChange = (email: string) => {
    this.setState({ email });
  };
  private handleReasonChange = (reason: string) => {
    this.setState({ reason });
  };
  private handleNotesChange = (notes: string) => {
    this.setState({ notes });
  };
  private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
    await my_wait(1600);
    return {
      // errors: {
      //   email: ["Something is wrong with email"],
      // },
      success: true,
    };
  };
  public constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      name: "",
      notes: "",
      reason: "",
    };
  }
  public render() {
    return (
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as we can.
        </p>
        <ContactUs
          name={this.state.name}
          onNameChange={this.handleNameChange}
          email={this.state.email}
          onEmailChange={this.handleEmailChange}
          reason={this.state.reason}
          onReasonChange={this.handleReasonChange}
          notes={this.state.notes}
          onNotesChange={this.handleNotesChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ContactUsPage;
