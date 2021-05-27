import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { Component } from "react";
import "./index.css";

interface ISearchProps {
  value: string;
  placeholder: string;
  onChange: (event: any) => void;
}

// Search Input
const Search = (props: ISearchProps) => {
  return (
    <div className="search">
      <input
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        maxLength={10}
        onChange={props.onChange}
      />
    </div>
  );
};

interface IContractProps {
  id: number;
  name: string;
  onClick: (event: any, id: number) => void;
}

const Contract = (props: IContractProps) => {
  return (
    <li key={props.id}>
      <a
        href="#/"
        data-id={props.id}
        onClick={(event) => {
          props.onClick(event, props.id);
        }}
      >
        {" "}
        {props.name}{" "}
      </a>
    </li>
  );
};

interface Address {
  id: number;
  letter: string;
  name: string;
  phone: string;
  email: string;
  remark: string;
  [key: string]: any;
}

interface IUListProps {
  addresses: Address[];
  onClick: (event: any, id: number) => void;
}

class UList extends React.Component<IUListProps, {}> {
  renderContacts(letter: string, list: Address[]) {
    const contacts = list.map((addr) => {
      return (
        <Contract
          key={addr.id}
          id={addr.id}
          name={addr.name}
          onClick={this.props.onClick}
        />
      );
    });

    return (
      <li key={letter}>
        <span className="letter">{letter}</span>
        <ul className="contacts">{contacts}</ul>
      </li>
    );
  }
  render() {
    const list = this.props.addresses.slice();
    let group: { [key: string]: Address[] } = {};

    for (let item of list) {
      let val = group[item.letter];
      if (!val) {
        val = [];
        group[item.letter] = val;
      }
      val.push(item);
    }

    const contacts = [];
    for (let k in group) {
      contacts.push(this.renderContacts(k, group[k]));
    }

    return <ul className="list">{contacts}</ul>;
  }
}

const Item = (props: { field: string; value: string }) => {
  return (
    <div className="item">
      <div className="field">{props.field}</div>
      <div className="value">{props.value}</div>
    </div>
  );
};

const InputItem = (props: {
  field: string;
  name: string;
  value: string;
  maxLength: number;
  onChange: (event: any) => void;
}) => {
  return (
    <div className="item">
      <div className="field">{props.field}</div>
      <div className="value">
        <input
          type="text"
          name={props.name}
          value={props.value}
          maxLength={props.maxLength}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};
interface IAppStore {
  searchText: string;
  addresses: Address[];
  selected?: Address;
  editmodel: number;
  formValue: Address;
}
class App extends React.Component {
  // const {characters} = this.state;

  constructor(props: {}) {
    super(props);
    this.state = {
      searchText: "",
      addresses: [
        {
          id: 1,
          letter: "A",
          name: "A Hua",
          phone: "158 0000 0001",
          email: "admin@qq.com",
          remark: "",
        },
        {
          id: 2,
          letter: "A",
          name: "A Jua",
          phone: "158 0001 0002",
          email: "admin@qq.com",
          remark: "",
        },
      ],
      selected: undefined,
      editmodel: 0,
      formValue: undefined,
    }
  }
  searchInputChange = (event: any)=>{
    let value = event.target.value;
    this.setState({
      searchText: value
    })
  }
  render() {
    // const {characters} = this.state;

    return (
      <div className="container">
        <h1>Hello Tutorial!</h1>
      </div>
    );
  }
}

export default App;
