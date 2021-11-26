import React  from "react";
import { NavLink } from 'react-router-dom'
import AdminControls from "./admin";
import UserControls from "./user";

import packageJson from '../../../package.json'

export default function DefaultTopBar(props) {

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
                    return (<NavLink className='item' key={result.name} to={result.to}>{result.alias}</NavLink>)
                }))
            }
            {
                props.adminLoggedIn && (AdminControls.map((result) => {
                    return (<NavLink className='item' key={result.name} to={result.to}>{result.alias}</NavLink>)
                }))
            }

            <div className='right menu'
            >
                {
                    props.tokenValid ? (
                        <NavLink className=' item' to='/logout' >
                            退出
                        </NavLink>
                    ) : (
                        <NavLink className='item' to='/login' >
                            登录
                        </NavLink>
                    )
                }
            </div>

        </div>
    );
}