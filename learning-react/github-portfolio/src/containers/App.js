// import logo from '../logo.svg';
import logo from '../GitHub-Mark-Light-64px.png';
// import './App.css';
import Header from '../components/Header/Header';
import Profile from './Profile';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "SegoeUI", "Roboto","Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`


const AppWrapper = styled.div`
  text-align: center;
`

function App() {
  return (
    <>
    <GlobalStyle />
    <AppWrapper>
      <Header  logo={logo} />
      <Profile />
    </AppWrapper>
    </>
  );
}

export default App;
