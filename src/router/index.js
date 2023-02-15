import { createWebHistory, createRouter } from 'vue-router';
import main from '../views/main.vue';
import cities from '../views/cities.vue';
import offers from '../views/offers.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: main
    },
    {
        path: '/cities/:path1',
        name: 'cities',
        component: cities
    },
    {
        path: '/offers',
        name: 'offers',
        component: offers
    }
];

const router = createRouter({
	history : createWebHistory(),
    routes
});

export default router;