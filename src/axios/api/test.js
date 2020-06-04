import axios from '@/axios/index'

function testAPI() {
    return axios.get('/test_mock')
}

export {
    testAPI
}
