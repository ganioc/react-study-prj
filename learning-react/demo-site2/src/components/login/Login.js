import React from 'react'
import {Grid , Header, Form, Segment, Message, Button} from 'semantic-ui-react'

const Login = () => {

    return(
        <Grid textAlign='center' style={{ height:'100vh'}} verticalAlign='top'>
            <Grid.Column style={{ maxWidth: 500}}>
                <Header as='h2' textAlign='center'>
                <i class="sign in alternate icon green"></i>登录账户
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='用户' />
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='密码' type='password' />
                        <Button color='teal' fluid size='large'>
                            登录
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    用户名和密码,请联系管理员
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default Login;