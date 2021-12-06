const express = require("express")
const app = express()

const React = require("react")
const ReactDOMServer = require("react-dom/server")
const { StaticRouter, BrowserRouter, Routes, Route } = require('react-router-dom')

// components
const Home = require('./components/Home.js')
const About = require('./components/About.js')

function template(reactDom) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>React SSR</title>
            </head>
            <body>
                <div id="root">${reactDom}</div>
            </body>
        </html>
    `
}


app.get('/*', (req, res) => {
    // const jsx = <div>Hello World</div>

    const Jsx = function () {
        return 
            (<StaticRouter location={req.url} >
                
                    <Route path="/" component={<Home />} />
                
            </StaticRouter>);
    }

    console.log(Jsx)
    const reactDom = ReactDOMServer.renderToString(<Jsx />);
    console.log('reactDom: ', reactDom)

    res.send(template(reactDom))
})

app.listen(1337)









