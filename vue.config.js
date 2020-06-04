const PORT = '8080'
const HOST = 'localhost'
const PROXY = null
const DIST_NORMAL = 'dist_normal'
const DIST_GZIP = 'dist_gzip'

const CompressionPlugin = (process.env.VUE_APP_MODE === 'gzip')?require('compression-webpack-plugin'): null
let configTemplate = {
    assetsDir: 'static/',
    outputDir: (process.env.VUE_APP_MODE === 'gzip')?DIST_GZIP: DIST_NORMAL,
    productionSourceMap: false,
    devServer:{
        open: true,
        host: HOST,
        port: PORT,
        hotOnly: false,
        proxy: PROXY,
    },
    css:{
        loaderOptions:{
            sass:{
                prependData: `
                @import "@/assets/scss/variable.scss";
                `
            }
        }
    },
    configureWebpack(config) {
        // 去除打包 console
        if (process.env.NODE_ENV === 'production'){
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
        // 配置 gzip压缩
        if (process.env.VUE_APP_MODE === 'gzip') {
            return {
                plugins: [
                    new CompressionPlugin({
                        algorithm: 'gzip',
                        test: /\.(js|css|scss)$/,// 匹配文件名
                        threshold: 10240, // 对超过10k的数据压缩
                        deleteOriginalAssets: true, // 不删除源文件
                        minRatio: 0.8 // 压缩比
                    })
                ]
            }
        } else {
            return {}
        }
    }
}


module.exports = configTemplate
