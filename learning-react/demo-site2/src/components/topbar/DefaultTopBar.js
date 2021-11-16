import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { client } from '../../Client'
import AdminControls from "./admin";
import UserControls from "./user";

import packageJson from '../../../package.json'

export default function DefaultTopBar() {

    return (
        <div className='ui huge  top attached fluid secondary menu' >
            <div className='item'>
                <img src="/images/logo.png" alt="logo.png" />
            </div>
            <div className='item'>
                <NavLink className="ui blue header" to="/">数据分发共享组件{packageJson.version}</NavLink>
                {/* <h3
                    className='ui blue header'
                >
                    数据分发共享组件{packageJson.version}
                </h3> */}
            </div>
            {
                client.isUserLoggedIn() && (UserControls.map((result) => {
                    return (<NavLink className='item' to={result.to}>{result.alias}</NavLink>)
                }))
            }
            {
                client.isAdminLoggedIn() && (AdminControls.map((result) => {
                    return (<NavLink className='item' to={result.to}>{result.alias}</NavLink>)
                }))
            }

            <div className='right menu'
            >
                {
                    client.isLoggedIn() ? (
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