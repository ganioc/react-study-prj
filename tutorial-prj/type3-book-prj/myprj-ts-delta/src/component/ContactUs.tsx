import React from "react";
import { Form, minLength, required } from "./Form";

interface IProps {
  name: string;
  onNameChange: (name: string) => void;
  email: string;
  onEmailChange: (email: string) => void;
  reason: string;
  onReasonChange: (reason: string) => void;
  notes: string;
  onNotesChange: (notes: string) => void;
}

const ContactUs: React.FC<IProps> = (props) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onNameChange(e.currentTarget.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onEmailChange(e.currentTarget.value);
  };
  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onReasonChange(e.currentTarget.value);
  };
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onNotesChange(e.currentTarget.value);
  };
  return (
    <Form
      defaultValues={{ name: "", email: "", reason: "Support", notes: "" }}
      validationRules={{
        email: { validator: required },
        name: [{ validator: required }, { validator: minLength, arg: 3 }],
      }}
      onSubmit={}
    >
      <Form.Field name="name" label="Your Name" type="Text" />
      <Form.Field name="email" label="Your email address" type="Email" />
      <Form.Field
        name="reason"
        label="Reason you need to contact us"
        type="Select"
        options={["Marketing", "Support", "Feedback", "Jobs", "Other"]}
      />
      <Form.Field name="notes" label="Additional notes" type="TextArea" />
    </Form>
  );
};

export default ContactUs;
