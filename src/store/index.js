import Vue from 'vue';
import Vuex from 'vuex';
import '@/mock'

Vue.use(Vuex);

const state = {
    env: process.env.VUE_APP_MODE
}

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state
});

export default store
