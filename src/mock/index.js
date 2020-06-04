import Mock from 'mockjs'
import test_list from './modules/test'

const TIMEOUT = 800    // 设置延迟时间


Mock.setup({
    timeout: TIMEOUT
})

Mock.mock('/test_mock',  'get',test_list.list)
