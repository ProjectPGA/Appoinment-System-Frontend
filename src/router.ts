import Router, { RouterOptions } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Invitation from '@/views/Invitation.vue';
import UserAppointments from '@/views/UserAppointments.vue';
import Contact from '@/views/Contact.vue';
const routes = {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { linkText: 'Home' },
            children: [
                {
                    path: '/Appointments',
                    name: 'Appointments',
                    component: UserAppointments,
                    meta: { linkText: 'Appointments' },
                },
                {
                    path: '/Contact',
                    name: 'Contact',
                    component: Contact,
                    meta: { linkText: 'Contact' },
                },
            ],
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
            meta: { linkText: 'Login' },
        },
        {
            path: '/Invitation',
            name: 'Invitation',
            component: Invitation,
            meta: { linkText: 'Invitation' },
        },
    ],
};

export const router = new Router(routes as RouterOptions);
