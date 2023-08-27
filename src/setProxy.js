const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/backend',
            createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    )
    app.use(
        '/datakorea',
            createProxyMiddleware({
            target: 'http://apis.data.go.kr',
            changeOrigin: true,
        })
    )
}