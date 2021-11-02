import React  from "react";
import './Header.css';
import Link from '../Link/Link'

const Header=({logo})=>(
    <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link title='Learn some React' url="https://reactjs.org" />
    </header>
);

export default Header;
