import PropTypes from 'prop-types'
import logo from './logo.svg'
import React from 'react'
import './App.css';
import {createBrowserHistory} from 'history';

// const history = createBrowserHistory();

const Route = ({path, component}, {location}) => {
  const pathName =  location.pathname;

  if(pathName.match(path)){
    return (React.createElement(component))
  }else{
    return null;
  }
}
Route.contextTypes = {
  location: PropTypes.object
}

const Link = ({ to, children}, {history}) => (
  <a onClick={(e) => {
    e.preventDefault();
    history.push(to);
  }}
  href={to}
  >
    {children}
  </a>
)
Link.contextTypes = {
  history: PropTypes.object
}

class Router extends React.Component{
  static childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  }
  constructor(props){
    super(props);
    this.history= createBrowserHistory();
    this.history.listen(()=> this.forceUpdate())
  }
  getChildContext(){
    return {
      history: this.history,
      location: window.location,
    }
  }
  render(){
    return this.props.children;
  }
}

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

const App = ()=> (
  <Router>
      <div className="ui text container">
        <h2 className='ui dividing header'>
          数据分发组件演示
        </h2>
        <ul>
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
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route path='/user'  component={User}  /> 
      </div>
  </Router>)



export default App;
