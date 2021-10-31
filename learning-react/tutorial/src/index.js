import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return (
  <div className='container-fluid'>
    <nav className='navbar sticky-top navbar-light bg-dark'>
      <h1 className='navbar-brand text-light'>movieList</h1>
    </nav>
    <List />
  </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
