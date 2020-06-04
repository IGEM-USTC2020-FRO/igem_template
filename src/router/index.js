import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import helo from '@/components/HelloWorld'

const router = new Router({
    mode: 'history',
    routes:[{
        path: '/',
        component: helo,
        name: 'hello'
    }]
})

export default router
