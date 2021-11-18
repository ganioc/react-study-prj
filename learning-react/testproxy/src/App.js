
import './App.css';

function App() {
  const handleClick = (e)=>{
    const rpcData = {
      "id": 104,
      "jsonrpc": "2.0",
      "method": "login",
      "params": {
          "user": "admin",
          "secret": "DiankeDemo1"
      }
    }
    console.log('click')
    fetch("/rpc/v2",{
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rpcData)
    }).then(resp => {
      // console.log(resp)
      return resp.json();
      
    }).then(data => {
      console.log(data)
      // console.log(data.result)
      // console.log(data.result.data[0].result)
      // console.log(data.error.code)
      console.log(data.error.code)  
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
