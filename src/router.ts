import Router, { RouterOptions } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Invitation from '@/views/Invitation.vue';
import UserAppointments from '@/views/UserAppointments.vue';
import Contact from '@/views/Contact.vue';
import User from '@/views/User.vue';
const routes = {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/Inicio',
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
                {
                    path: '/User',
                    name: 'User',
                    component: User,
                    meta: { linkText: 'User' },
                },
            ],
        },
        {
            path: '/',
            name: 'Login',
            component: Login,
            meta: { linkText: 'Login' },
        },
        {
            path: '/Registro',
            name: 'Register',
            component: Register,
            meta: { linkText: 'Register' },
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
