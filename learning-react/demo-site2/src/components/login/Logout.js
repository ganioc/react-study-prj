import React from 'react'
import { useNavigate } from 'react-router';
import { client } from '../../Client'


function Logout (){
    client.logout();

    let navigate = useNavigate();

    return(
            <p>Logout</p>
        )
}

export default Logout;
