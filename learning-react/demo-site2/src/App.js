import PropTypes from 'prop-types'
import logo from './logo.svg'
import React from 'react'
import './App.css';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  Outlet,
  NavLink,
} from 'react-router-dom';
import TopBar from './components/TopBar';

const Home = () => (
  <>
    <h3>主页</h3>
    <p>Home Page</p>
  </>
)


const Login = () => (
  <>
    <h3>登录</h3>
    <p>用户登录</p>
  </>
)

const Admin = () => (
  <>
    <h3>Admin Page</h3>
    <p>Admin can manipulate the creation of users.</p>
  </>
)

const User = () => (
  <>
    <h3>User Page</h3>
    <p>User page for Normal User.</p>
  </>
)
const Page404 = ({location}) => (
  <>
    <h3>404 page</h3>
    <p style={{background: '#ff0000', padding:'1rem', color:'white'}} >Unknown url</p>
    <Link to="/">home</Link>
  </>
)
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
  const style = ({ isActive })=> ({
    fontWeight: isActive? 'bold': 'normal',
    padding: 5,
  })
  return (
    <>
    <TopBar></TopBar>
    <div className='spacer row' />
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
    </>);
};
const App = () => (
  <div className='ui grid'>
  <Router>
    {/* <h2 className='ui dividing header' style={{ padding: '1rem' }}>
      数据分发组件演示
    </h2> */}
    {/* <Navigation /> */}
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </Router>
  </div>)



export default App;
