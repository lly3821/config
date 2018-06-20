const merge = require('webpack-merge')
const common = require('./webpack._com')

module.exports = merge(common,{
    mode:'production',
    devtool:'source-map'
})