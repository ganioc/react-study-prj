import React, { useEffect, useContext, useState , useRef} from 'react'
import { useNavigate } from 'react-router';
import { client } from '../../Client'
import { Container, Header, Button, Icon, CommentActions } from 'semantic-ui-react'
import { UserStateContext } from '../state/UserState';
import { useInterval } from '../util';

function Logout() {
    const { setTokenValid, setAdminLoggedIn, setUserLoggedIn } = useContext(UserStateContext)
    let navigate = useNavigate();

    let [counter, setCounter] = useState(5);
    let [timer, setTimer] = useState(null);
    const counterRef = useRef(0);
    counterRef.current = counter;

    useInterval(()=>{
        setCounter( counter -1)
    },1000)
    
    
    useEffect(() => {
        console.log('useEffect')

        setTimeout(() => {
            client.logout();
            setTokenValid(false);
            setUserLoggedIn(false);
            setAdminLoggedIn(false)
            navigate("/", { replace: true })
        }, 5000)

        return () => {
            console.log("logout cleanup()")
            clearInterval(timer);
            setTimer(null)
        }
    }, [])

    return (
        <Container text>
            <Header
                as='h1'
                content='用户退出'

                style={{
                    fontSize: '2em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '1.5em'
                }}
            />
            <Header as='h2'
                content={counter}

                style={{
                    fontSize: '1.5em',
                    fontWeight: 'normal',
                    marginTop: '0.5em'
                }}
            />
            <Button primary size='huge'>
                跳转
                <Icon name='right arrow' />
            </Button>

        </Container>
    )
}

export default Logout;
