import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import Mint from 'mint-ui';

Vue.prototype.$http = axios

Vue.config.debug = true;
Vue.use(Router);
Vue.use(Mint);

import Home from './components/home.vue';

const routes = [
    //首页
    { path: '/', name: 'home', component: Home }

];

const router = new Router({
    //mode: 'history',
    routes // （缩写）相当于 routes: routes
});

//初始化绑定
const app = new Vue({
    router
}).$mount('#app');