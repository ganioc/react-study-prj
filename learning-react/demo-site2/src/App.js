// import PropTypes from 'prop-types'

import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/home/Home'
import DefaultTopBar from './components/topbar/DefaultTopBar';
import Login from './components/login/Login'
import Page404 from './components/404/Page404';
import Logout from './components/login/Logout'
import Admin from './components/admin/Admin'
import User from './components/user/User'
import { client } from './Client';

const Navigation = () => {
  return (
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }} >
      <Link to='/' style={{ padding: 5 }}>
        <code>home</code>
      </Link>
      <Link to='/admin' style={{ padding: 5 }}>
        <code>admin</code>
      </Link>

      <Link to='/user' style={{ padding: 5 }}>
        <code>user</code>
      </Link>
      <Link to='/login' style={{ padding: 5 }}>
        <code>login</code>
      </Link>
    </nav>
  )
}
const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    padding: 5,
  })
  return (
    <>
      {/* <TopBar></TopBar> */}
      <div className='spacer row' />
      {/* <div className='row'>
        <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }} >
          <NavLink to='/' style={style}>
            <code>home</code>
          </NavLink>
          <NavLink to='/admin' style={style}>
            <code>admin</code>
          </NavLink>
          <NavLink to='/user' style={style}>
            <code>user</code>
          </NavLink>
          <NavLink to='/login' style={style}>
            <code>login</code>
          </NavLink>
        </nav>
        <main style={{ padding: '1rem 1rem' }}>
          <Outlet />
        </main>

      </div> */}

    </>);
};
// const App = () => (
//   <Router>
//     <Container style={{ margin: 20}} > 被666666666666666666666666666666666666666666666
//       <Header as="h2">数据分发共享组件</Header>vvv她2415674
//       {/* <TopBar></TopBar> */}
//       {/* <div className='spacer row' /> */}
//       <MenuBar />
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/admin' element={<Admin />} />
//         <Route path='/user' element={<User />} />
//         <Route path="*" element={<Page404 />} />
//       </Routes>
//     </Container>
//   </Router>
// )

const App = () =>{
  

  return (
    <Router>
        <DefaultTopBar tokenValid={client.isTokenValid()} adminLoggedIn={client.isAdminLoggedIn()} userLoggedIn={client.isUserLoggedIn()} />
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
  )
} 



export default App;
