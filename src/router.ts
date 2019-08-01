import Router, { RouterOptions } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { linkText: 'Home' },
        },
    ],
};

export const router = new Router(routes as RouterOptions);
