import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios, { CancelTokenSource } from "axios";

interface IPost {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

interface IState {
  posts: IPost[];
  error: string;
  cancelTokenSource?: CancelTokenSource;
  loading: boolean;
  editPost: IPost;
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
  private handleCancelClick = () => {
    if (this.state.cancelTokenSource) {
      this.state.cancelTokenSource.cancel("User cancelled operation");
    }
  };
  private handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      editPost: { ...this.state.editPost, title: e.currentTarget.value },
    });
  };
  private handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      editPost: { ...this.state.editPost, body: e.currentTarget.value },
    });
  };
  private handleSaveClick = () => {
    axios
      .post<IPost>(
        "https://jsonplaceholder.typicode.com/posts",
        {
          body: this.state.editPost.body,
          title: this.state.editPost.title,
          userId: this.state.editPost.userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        this.setState({
          posts: this.state.posts.concat(response.data),
        });
      });
  };
  public constructor(props: {}) {
    super(props);
    this.state = {
      posts: [],
      error: "",
      loading: true,
      editPost: {
        body: "",
        title: "",
        userId: 1,
      },
    };
  }
  public render() {
    return (
      <div className="App">
        <div className="post-edit">
          <input
            type="text"
            placeholder="Enter title"
            value={this.state.editPost.title}
            onChange={this.handleTitleChange}
          />
          <textarea
            placeholder="Entery body"
            value={this.state.editPost.body}
            onChange={this.handleBodyChange}
          />
          <button onClick={this.handleSaveClick}>Save</button>
        </div>
        {this.state.loading && (
          <button onClick={this.handleCancelClick}>Cancel</button>
        )}
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
    const cancelToken = axios.CancelToken;
    const cancelTokenSource = cancelToken.source();
    this.setState({ cancelTokenSource });

    axios
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
        cancelToken: cancelTokenSource.token,
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 5000,
      })
      .then((response) => {
        this.setState({ posts: response.data, loading: false });
      })
      .catch((ex) => {
        const error =
          ex.code === "ECONNABORTED"
            ? "A timeout has occurred"
            : ex.response.status === 404
            ? "Resource not found"
            : "An unexpected error has occurred";
        this.setState({ error, loading: false });
      });
  }
}

export default App;
