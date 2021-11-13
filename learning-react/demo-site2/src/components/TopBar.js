import React from "react";
import {Link} from 'react-router-dom'
import {client} from '../Client'

const TopBar = () => {
    return (
        <div className='ui huge top attached fluid secondary menu'>
            <div className='item' />
            <div className='item'>
                <h1
                    className='ui blue header'
                    style={{ marginTop: '20px' }}
                >
                    数据分发共享组件演示
                </h1>
            </div>
            <div className='right menu'>
                {
                    client.isLoggedIn() ? (
                        <Link className='ui item' to='/logout'>
                            退出
                        </Link>
                    ) : (
                        <Link className='ui item' to='/login'>
                            登录
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default TopBar;
