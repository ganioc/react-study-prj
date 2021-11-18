const  {createProxyMiddleware}  = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/rpc',
        createProxyMiddleware(
            
            {
                target: 'http://52.82.29.171:3001',
                // changeOrigin: true
            })
    )
}
