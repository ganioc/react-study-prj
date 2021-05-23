import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import Table from './Table'
import Form from './Form'
import './index.css'

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

class App extends Component {
  state = {
    characters:[]
  }
  removeCharacter = index =>{
    const {characters} = this.state;
    this.setState({
      characters:characters.filter((character,i)=>{
        return i !== index
      })
    })
  }

  handleSubmit = character =>{
    this.setState({characters:[...this.state.characters, character]})
  }
  
  render(){
    const {characters} = this.state;

    return(
      <div className="container">
        <h1>Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table 
          characterData={characters}
          removeCharacter={this.removeCharacter}
          />
        <h3>Add New Character</h3>
        <Form handleSubmit={this.handleSubmit} />
        

      </div>
    );
  }

}

export default App;
