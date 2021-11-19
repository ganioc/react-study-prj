import React, { useState } from 'react'
import { useNavigate } from 'react-router';
// import { useNavigate } from 'react-router';
import { Grid, Header, Form, Segment, Message, Button } from 'semantic-ui-react'
import { client } from '../../Client';


const LoginFunc = () => {
    const [loginInProgress, setLoginInProgress] = useState(false);
    const [shouldRedirect, setShouldRedirect] = useState(false)
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
        console.log('username:', username);
        console.log('password:', password)
        const result = await client.login(username, password)

        if (result === 'OK') {
            console.log('To set token')
            client.setToken()
            let url = (username === 'admin')?'/':'/user'
            navigate(url, { replace: true })
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
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            loginInProgress: false,
            shouldRedirect: false,
            error: '',
            username: '',
            password: '',
        }
        this.handleInputPassword = this.handleInputPassword.bind(this)
        this.handleInputUsername = this.handleInputUsername.bind(this)
    }
    handleInputUsername(event) {
        this.setState({ username: event.target.value })
    }
    handleInputPassword(event) {
        this.setState({ password: event.target.value })
    }

    performLogin = async (e) => {
        this.setState({ loginInProgress: true });
        console.log('username:', this.state.username)
        console.log('password:', this.state.password)
        const result = await client.login(this.state.username, this.state.password);



        if (result === 'OK') {
            console.log('To set token')
            client.setToken()


        } else {
            console.log('error:', result)
            this.setState({
                error: result,
                loginInProgress: false
            })
        }

    }
    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Header as='h2' textAlign='center'>
                        <i className="sign in alternate icon green"></i>登录账户
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='用户' onChange={this.handleInputUsername} />
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='密码' type='password' onChange={this.handleInputPassword} />

                            <Button color='blue' fluid size='large' onClick={this.performLogin}>
                                登录
                            </Button>

                        </Segment>
                    </Form>

                    {this.state.error ? (<Message error>{this.state.error}</Message>)
                        : (<Message>用户名和密码,请联系管理员</Message>)
                    }

                </Grid.Column>
            </Grid>
        )
    }
}

export default LoginFunc;