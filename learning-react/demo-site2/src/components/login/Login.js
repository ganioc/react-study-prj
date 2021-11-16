import React from 'react'
import { Grid, Header, Form, Segment, Message, Button } from 'semantic-ui-react'
import { client } from '../../Client';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            loginInProgress: false,
            shouldRedirect: false,
            error: false,
            username: '',
            password: '',
        }
        this.handleInputPassword = this.handleInputPassword.bind(this)
        this.handleInputUsername = this.handleInputUsername.bind(this)
    }
    handleInputUsername(event){
        this.setState({ username:event.target.value})
    }
    handleInputPassword(event){
        this.setState({ password: event.target.value})
    }

    performLogin = (e) => {
        // this.setState({ loginInProgress: true });
        console.log('username:', this.state.username)
        console.log('password:', this.state.password)
        client.login();

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

                    {this.state.error ? (<Message warning>error</Message>)
                        : (<Message>用户名和密码,请联系管理员</Message>)
                    }

                </Grid.Column>
            </Grid>
        )
    }
}

export default Login;