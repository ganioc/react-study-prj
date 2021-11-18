import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = (e)=>{
    const data = {
      "id": 101,
      "jsonrpc": "2.0",
      "method": "login",
      "params": {
          "user": "admin",
          "secret": "DiankeDemo"
      }
    }
    console.log('click')
    fetch("/rpc/v2",{
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => {
      console.log(resp)
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <button onClick={handleClick}>确定</button>
      </section>
      </header>
      
    </div>
  );
}

export default App;
