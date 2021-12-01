import React, {useContext} from "react";
import { NavLink } from 'react-router-dom'
import AdminControls from "./admin";
import UserControls from "./user";
import { Radio } from 'semantic-ui-react'
import packageJson from '../../../package.json'
import { UserStateContext } from "../state/UserState";

export default function DefaultTopBar(props) {

    const {defaults} =  useContext(UserStateContext);
    let toggle = (e)=>{
        console.log("toggle:", defaults.getTheme())
        if(defaults.getTheme() === 'dark'){
            defaults.setTheme('light')
        }else{
            defaults.setTheme('dark')
        }
    }

    return (
        <div className='ui huge  top attached fluid secondary menu' >
            <div className='item'>
                <img src="/images/logo.png" alt="logo.png" />
            </div>
            <div className='item'>
                <NavLink className="ui blue header" to="/">数据分发共享组件{packageJson.version}</NavLink>
            </div>
            {
                props.userLoggedIn && (UserControls.map((result) => {
                    return (
                    <div className='item'>
                    <NavLink className='item' key={result.name} to={result.to}>{result.alias}</NavLink>
                    </div>)
                }))
            }
            {
                props.adminLoggedIn && (AdminControls.map((result) => {
                    return (
                    <div className='item'>
                    <NavLink className='item' key={result.name} to={result.to}>{result.alias}</NavLink>
                    </div>)
                }))
            }

            <div className='right menu'>
                <div className='item'>
                    <Radio toggle onChange={toggle} />
                    {/* <label>{defaults.getTheme()}</label> */}
                </div>

                {
                    props.tokenValid ? (
                        <div className='item'>
                        <NavLink className='item' to='/logout' >
                            退出
                        </NavLink>
                        </div>
                    ) : (
                        <div className='item'>
                        <NavLink className='item' to='/login' >
                            登录
                        </NavLink>
                        </div>
                    )
                }
            </div>

        </div>
    );
}