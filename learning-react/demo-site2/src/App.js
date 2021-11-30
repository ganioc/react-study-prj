// import PropTypes from 'prop-types'

import React, {useState} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/home/Home'
import DefaultTopBar from './components/topbar/DefaultTopBar';
import Login from './components/login/Login'
import Page404 from './components/404/Page404';
import Logout from './components/login/Logout'
import Admin from './components/admin/Admin'
import User from './components/user/User'
import { client } from './Client';
import { UserStateContext } from './components/state/UserState';

const App = () => {
  // 利用client来进行读取设置初始的值; 全局状态设置
  const [tokenValid, setTokenValid] = useState(client.isTokenValid());
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(client.isAdminLoggedIn());
  const [isUserLoggedIn, setUserLoggedIn] = useState(client.isUserLoggedIn())

  const [theme , setTheme] = useState('light')

  const defaults = {
    getTheme(){
      return theme;
    },
    setTheme(value){
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(value);
      setTheme(value)
    },
    name: 'Mehul',
    getLogo(){
      return (theme === 'dark')? 'white-logo': 'red-logo'
    }
  };

  return (
    <UserStateContext.Provider value={{setTokenValid, setAdminLoggedIn, setUserLoggedIn, defaults}}>
      <Router>
        <DefaultTopBar tokenValid={tokenValid} adminLoggedIn={isAdminLoggedIn} userLoggedIn={isUserLoggedIn} />
        <div className='spacer row' />
        <div className='row'>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/user' element={<User />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    </UserStateContext.Provider>
  )
}



export default App;
