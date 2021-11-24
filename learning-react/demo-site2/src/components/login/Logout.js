import React, {useEffect} from 'react'
import { useNavigate } from 'react-router';
import { client } from '../../Client'
// import { NavLink } from 'react-router-dom';
import { Container , Header, Button, Icon} from 'semantic-ui-react'

function Logout (){
   
    let navigate = useNavigate();

    useEffect(() => {
        client.logout();
        setTimeout(()=>{
            navigate("/", {replace:true})
        },3000)
    })

    return(
        <Container text>
            <Header 
                as='h1'
                content='用户退出'
       
                style={{
                    fontSize: '2em',
                    fontWeight:'normal',
                    marginBottom: 0,
                    marginTop: '1.5em'
                }}
            />
            <Header as='h2'
                content='3秒后，回到主页面'
      
                style={{
                    fontSize: '1.5em',
                    fontWeight: 'normal',
                    marginTop: '0.5em'
                }}
            />
            {/* <Button primary size='huge'>
                跳转
                <Icon name='right arrow' />
            </Button> */}

        </Container>
        )
}

export default Logout;
