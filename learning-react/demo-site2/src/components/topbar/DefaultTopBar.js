import React from "react";
import { Link } from 'react-router-dom'
import { client } from '../../Client'
import AdminControls from "./admin";
import UserControls from "./user";

import packageJson from '../../../package.json'

export default function DefaultTopBar() {

    return (
        <div className='ui huge top attached fluid secondary menu' style={{
            display: 'flex',
            background: 'white',
        }}>
            <div className='item'>
                <h3
                    className='ui blue header'
                    style={{
                        marginTop: '0px',
                        color: 'white'
                    }}
                >
                    数据分发共享组件{packageJson.version}
                </h3>
            </div>
            {
                client.isUserLoggedIn()&&(UserControls.map((result)=>{
                    return(<Link className='item' to={result.to}>{result.alias}</Link>)
                }))
            }
            {
                client.isAdminLoggedIn()&&(AdminControls.map((result)=>{
                    return(<Link className='item' to={result.to}>{result.alias}</Link>)
                }))
            }
            
            <div className='right menu'
            >
                {
                    client.isLoggedIn() ? (
                        <Link className=' item' to='/logout' style={{
                            color: 'black'
                        }}>
                            退出
                        </Link>
                    ) : (
                        <Link className='item' to='/login' style={{
                            color: 'black'
                        }}>
                            登录
                        </Link>
                    )
                }
            </div>

        </div>
    );
}