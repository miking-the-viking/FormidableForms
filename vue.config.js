module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/FormidableForms/'
        : '/',
    configureWebpack: {
        devtool: 'source-map'
    }
}