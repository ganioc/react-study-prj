import PropTypes from 'prop-types'
import logo from './logo.svg'
import React from 'react'
import './App.css';
import {createBrowserHistory} from 'history';
import { BrowserRouter as Router,
          Routes,
          Route,
          Link,
      Redirect} from 'react-router-dom';

// const history = createBrowserHistory();

// const Route = ({path, component}, {location}) => {
//   const pathName =  location.pathname;

//   if(pathName.match(path)){
//     return (React.createElement(component))
//   }else{
//     return null;
//   }
// }
// Route.contextTypes = {
//   location: PropTypes.object
// }

// const Link = ({ to, children}, {history}) => (
//   <a onClick={(e) => {
//     e.preventDefault();
//     history.push(to);
//   }}
//   href={to}
//   >
//     {children}
//   </a>
// )
// Link.contextTypes = {
//   history: PropTypes.object
// }

// class Redirect extends React.Component{
//   static contextType = {
//     history: PropTypes.object
//   }
//   componentDidMount(){
//     const history = this.context.history;
//     const to = this.props.to;
//     history.push(to)
//   }
//   render(){
//     return null;
//   }
// }

// class Router extends React.Component{
//   static childContextTypes = {
//     history: PropTypes.object,
//     location: PropTypes.object,
//   }
//   constructor(props){
//     super(props);
//     this.history= createBrowserHistory();
//     this.history.listen(()=> this.forceUpdate())
//   }
//   getChildContext(){
//     return {
//       history: this.history,
//       location: window.location,
//     }
//   }
//   render(){
//     return this.props.children;
//   }
// }

const Home = ()=>(
  <div>
    <h3>主页</h3>
    <p>Home Page</p>
  </div>
)



const Login = ()=>(
  <div>
    <h3>登录</h3>
    <p>用户登录</p>
  </div>
)

const Admin=()=>(
  <div>
    <h3>Admin Page</h3>
    <p>Admin can manipulate the creation of users.</p>
  </div>
)

const User=()=>(
  <div>
    <h3>User Page</h3>
    <p>User page for Normal User.</p>
  </div>
)
const Page404 = () => (
  <div>
    <h3>404 page</h3>
    <p>Unknown url</p>
  </div>
)

const App = ()=> (
  <Router>
      <div className="ui text container">
        <h2 className='ui dividing header'>
          数据分发组件演示
        </h2>
        <ul>
          <li>
            <Link to='/'>
              <code>/home</code>
            </Link>
          </li>
          <li>
            <Link to='/admin'>
              <code>/admin</code>
            </Link>
          </li>
          <li>
            <Link to='/user'>
              <code>/user</code>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <code>/login</code>
            </Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user'  element={<User />}  /> 
          <Route path='/' element={<Home />} />
          <Route element={<Page404 />} />
        </Routes>
      </div>
  </Router>)



export default App;
