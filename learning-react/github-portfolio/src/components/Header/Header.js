import React  from "react";
// import './Header.css';
// import Link from '../Link/Link'

import styled from "styled-components";

const HeaderWrapper = styled.div`
background-color: #000000;
/* min-height: 100vh; */
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;

`

const Logo =styled.img`
height: 64px;
pointer-events: none;
`


const Header=({logo})=>(
    <HeaderWrapper>
        <Logo src={logo} className="App-logo" alt="logo" />
        
         {/* 
         <p>
          Example page
        </p>
         <Link title='Learn some React' url="https://reactjs.org" /> */}

         <h1>
           Github Portfolio
         </h1>
    </HeaderWrapper>
);

export default Header;
