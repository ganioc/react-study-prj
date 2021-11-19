import React, {useEffect} from 'react'
import { useNavigate } from 'react-router';
import { client } from '../../Client'
import { NavLink } from 'react-router-dom';

function Logout (){
   
    let navigate = useNavigate();

    useEffect(() => {
        client.logout();
        setTimeout(()=>{
            navigate("/", {replace:true})
        },3000)
    })

    return(
        <NavLink to='/'>主页</NavLink>
        )
}

export default Logout;
