import logo from './logo.svg'
import React from 'react'
import './App.css';

const Route = ({path, component}) => {
  const pathName =  window.location.pathname;

  if(pathName.match(path)){
    return (React.createElement(component))
  }else{
    return null;
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

class App extends React.Component {
  render(){
    return (
      <div className="ui text container">
        <h2 className='ui dividing header'>
          数据分发组件演示
        </h2>
        <ul>
          <li>
            <a href='/admin'>
              <code>/admin</code>
            </a>
          </li>
          <li>
            <a href='/user'>
              <code>/user</code>
            </a>
          </li>
          <li>
            <a href='/login'>
              <code>/login</code>
            </a>
          </li>
        </ul>
        <hr />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route path='/user'  component={User}  /> 
      </div>
    );
  }
  
}



export default App;
