import VueRouter from 'vue-router';
import Vue from 'vue';
import router from './router/index';

Vue.use(VueRouter)

require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('v-header', require('./components/Header.vue').default);
Vue.component('v-content', require('./components/Content.vue').default);
Vue.component('v-card', require('./components/Card.vue').default);


import "../assets/scss/index.scss";

const app = new Vue({
    el: '#app',
    router
});
