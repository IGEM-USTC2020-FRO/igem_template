import axios  from 'axios'



// 配置 axios, 在 dev 模式下自动打印请求
function axiosInit(isPrint=false){
    // Request interceptor

    axios.defaults.baseURL = process.env.VUE_APP_API_URL

    axios.interceptors.request.use(config => {
        // Do something before request is sent
        try{
            if (isPrint){
                console.log(`[Request as follow(from ${config.url})]:`)
                console.log(config);
            }
        } catch (e) {
            console.log('[打印时发生错误]:', e)
            console.log(config);
        }

        return config;
    }, err => {
        // Do something with request error
        try{
            if (isPrint){
                console.log(`[Errors as follow(from ${err.config.url})]:`)
                console.log(err);
            }
        } catch (e) {
            console.log('[打印时发生错误]:', e)
            console.log(err);
        }

        return Promise.reject(err);
    });

    // Response interceptor
    axios.interceptors.response.use(res => {
        // Do something with response data
        try{
            if (isPrint) {
                console.log(`[Response as follow(from ${res.config.url})]:`)
                console.log(res);
            }
        } catch (e) {
            console.log('[打印时发生错误]', e)
            console.log(e);
        }


        return res;
    }, err => {
        // Do something with response error
        return Promise.reject(err);
    });
}
// 判断生产环境，如果是生产（打包）环境则不在控制台打印信息
if (process.env.VUE_APP_MODE !== 'prod'){
    axiosInit(true)
} else {
    axiosInit(false)
}

// 导出封装好的 axios， 可用作请求
export default axios

// 导出 api
export * from './api/test'
