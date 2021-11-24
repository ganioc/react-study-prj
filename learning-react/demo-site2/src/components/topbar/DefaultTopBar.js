import React , {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom'
import { client } from '../../Client'
import AdminControls from "./admin";
import UserControls from "./user";

import packageJson from '../../../package.json'

export default function DefaultTopBar(props) {

    const [tokenState, setTokenState] = useState(false)
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [adminLoggedIn, setAdminLoggedIn] = useState(false)

    useEffect(() => {
       setTokenState(props.tokenValid)
       setAdminLoggedIn(props.adminLoggedIn)
       setUserLoggedIn(props.userLoggedIn)

    }, [props.tokenValid, props.adminLoggedIn, props.userLoggedIn])

    return (
        <div className='ui huge  top attached fluid secondary menu' >
            <div className='item'>
                <img src="/images/logo.png" alt="logo.png" />
            </div>
            <div className='item'>
                <NavLink className="ui blue header" to="/">数据分发共享组件{packageJson.version}</NavLink>
            </div>
            {
                userLoggedIn && (UserControls.map((result) => {
                    return (<NavLink className='item' to={result.to}>{result.alias}</NavLink>)
                }))
            }
            {
                adminLoggedIn && (AdminControls.map((result) => {
                    return (<NavLink className='item' to={result.to}>{result.alias}</NavLink>)
                }))
            }

            <div className='right menu'
            >
                {
                    tokenState ? (
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