import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

interface IPost {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

interface IState {
  posts: IPost[];
  error: string;
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      posts: [],
      error: "",
    };
  }
  public render() {
    return (
      <div className="App">
        <ul className="posts">
          {this.state.posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    );
  }
  public componentDidMount() {
    axios
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource not found"
            : "An unexpected error has occurred";
        this.setState({ error });
      });
  }
}

export default App;
