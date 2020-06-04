// 引入随机函数
// 引入Mock

// 定义数据
const listData = {
    'data': 'mock 测试成功'
}

function list() {
    return {
        code: 200,
        data: listData.data,
        msg: '请求成功'
    }
}

export default {list}
