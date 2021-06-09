import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodosList from './components/TodosList';

// function App() {
//   return (
//     <h1>Hello from create react app</h1>
//   );
// }

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Setup development environment",
          completed: true
        },
        {
          id: 2,
          title: "Develop website and add content",
          completed: false
        },
        {
          id: 3,
          title: "Deploy to live server",
          completed: false
        }
      ]
    }


  }
  render() {
    return (
      <div>
        <TodosList todos={this.state.todos} />

      </div>
    )
  }
}

export default TodoContainer;
