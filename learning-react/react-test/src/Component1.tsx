import React , {createContext, useState} from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './global.css'

type Context = {
    theme: string;
    name: string;
    logo: string;
}

const StateContext = createContext<Partial<Context>>({})
export {StateContext};

const Component1: React.FC = ()=>{
    const [theme, setTheme] = useState<string>('light')
    return (
        <div>
            <Header/>
            <Content />
            <Footer />
        </div>
    )
}
export default Component1
