import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
// import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Invitation from '@/views/Invitation.vue';
// import UserAppointments from '@/views/UserAppointments.vue';
// import Contact from '@/views/Contact.vue';
// import User from '@/views/User.vue';
import Maintenance from '@/views/MaintenancePage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { linkText: 'Home' },
        children: [
            // {
            //     path: '/Appointments',
            //     name: 'Appointments',
            //     component: UserAppointments,
            //     meta: { linkText: 'Appointments' },
            // },
            // {
            //     path: '/Contact',
            //     name: 'Contact',
            //     component: Contact,
            //     meta: { linkText: 'Contact' },
            // },
            // {
            //     path: '/User',
            //     name: 'User',
            //     component: User,
            //     meta: { linkText: 'User' },
            // },
        ],
    },
    {
        path: '/Register',
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
    {
        path: '*',
        name: 'fallback',
        redirect: { name: 'Home' },
    },
    {
        path: '/maintenance',
        name: 'Maintenance',
        component: Maintenance,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: 'appointmnetsystem',
    routes,
});

export default router;
