import { Link } from 'react-router-dom';
import { Grid, Message, Header } from 'semantic-ui-react';

const Page404 = ({ location }) => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
        <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h2'>您访问的页面不存在</Header>
            <br/>

            <p>
            <big style={{ fontSize:'72px',color:'gray'}}>404</big>
            </p>
            
        <Message>
            <Link to="/">返回 home</Link>
        </Message>
    </Grid.Column>
    </Grid >
  )

export default Page404;