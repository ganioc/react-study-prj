import React, { useState , useContext} from 'react'
import { useNavigate } from 'react-router';
// import { useNavigate } from 'react-router';
import { Grid, Header, Form, Segment, Message, Button } from 'semantic-ui-react'
import { client } from '../../Client';
import { UserStateContext } from '../state/UserState';

const LoginFunc = () => {
    const { setTokenValid, setAdminLoggedIn, setUserLoggedIn } = useContext(UserStateContext)
    const [loginInProgress, setLoginInProgress] = useState(false);

    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleInputUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleInputPassword = (event) => {
        setPassword(event.target.value)
    }
    let navigate = useNavigate();

    const performLogin = async () => {
        setLoginInProgress(true);
        console.log("loginInProgress:", loginInProgress)
        console.log('username:', username);
        console.log('password:', password)
        const result = await client.login(username, password)

        if (result === 'OK') {
            console.log('To set token')
            client.setToken()

            setTokenValid(client.isTokenValid())
            setAdminLoggedIn(client.isAdminLoggedIn())
            setUserLoggedIn(client.isUserLoggedIn())

            navigate((username === 'admin')?'/admin':'/user', { replace: true })
        } else {
            console.log('error:', result)
            setError(result)
            setLoginInProgress(false)
        }
    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
            <Grid.Column style={{ maxWidth: 500 }}>
                <Header as='h2' textAlign='center'>
                    <i className="sign in alternate icon green"></i>登录账户
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='用户' onChange={handleInputUsername} />
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='密码' type='password' onChange={handleInputPassword} />

                        <Button color='blue' fluid size='large' onClick={performLogin}>
                            登录
                        </Button>
                    </Segment>
                </Form>

                {error ? (<Message error>{error}</Message>)
                    : (<Message>用户名和密码,请联系管理员</Message>)
                }

            </Grid.Column>
        </Grid>
    )


}

export default LoginFunc;