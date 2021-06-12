import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
// import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Invitation from '@/views/Invitation.vue';
// import UserAppointments from '@/views/UserAppointments.vue';
import Contact from '@/views/Contact.vue';
// import User from '@/views/User.vue';
import Maintenance from '@/views/MaintenancePage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            linkText: 'Home',
            title: 'Appointment System - Home',
            metaTags: [
                {
                    name: 'description',
                    content:
                        'The home page of Appointment System web application.',
                },
                {
                    property: 'og:description',
                    content:
                        'The home page of Appointment System web application.',
                },
            ],
        },
        children: [
            // {
            //     path: '/Appointments',
            //     name: 'Appointments',
            //     component: UserAppointments,
            //     meta: { linkText: 'Appointments' },
            // },
            {
                path: '/Contact',
                name: 'Contact',
                component: Contact,
                meta: {
                    linkText: 'Contact',
                    metaTags: [
                        {
                            name: 'description',
                            content:
                                'Contact info about the place like the phone number, location...',
                        },
                        {
                            property: 'og:description',
                            content:
                                'Contact info about the place like the phone number, location...',
                        },
                    ],
                },
            },
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
        meta: {
            linkText: 'Register',
            metaTags: [
                {
                    name: 'description',
                    content:
                        'Registration page to fill all the information about you as an user',
                },
                {
                    property: 'og:description',
                    content:
                        'Registration page to fill all the information about you as an user',
                },
            ],
        },
    },
    {
        path: '/Invitation',
        name: 'Invitation',
        component: Invitation,
        meta: {
            linkText: 'Invitation',
            metaTags: [
                {
                    name: 'description',
                    content: 'Page to introduce the provided invitational code',
                },
                {
                    property: 'og:description',
                    content: 'Page to introduce the provided invitational code',
                },
            ],
        },
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
    routes,
});

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.title);

    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);

    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
        el => {
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }
    );

    if (!nearestWithMeta) return next();

    nearestWithMeta.meta.metaTags
        .map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })

        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router;
