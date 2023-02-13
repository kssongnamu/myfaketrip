import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../views/main/index.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode:'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'main',
            component: main
        }
    ]
});