import '@babel/polyfill';
import axios from 'axios';
import Buefy from 'buefy';
import VTooltip from 'v-tooltip';
import vClickOutside from 'v-click-outside';
import VeeValidate from 'vee-validate';
import Vue from 'vue';
import VueMq from 'vue-mq';

import '@/class-component-hooks';
import App from '@/App.vue';
import { router } from '@/router';
import store from '@/vuex/store';
import '@/registerServiceWorker';
import i18n from '@/localization/localization';
import { Autofocus } from '@/directives/AutofocusDirective';
import { Scroll } from '@/directives/Scroll';
import { Device } from '@/models/utils/Device';

// import './assets/scss/variables/bulma-variables.scss';
import 'buefy/dist/buefy.css';
import Router from 'vue-router';
import { Http } from './namespaces/Http';
import '@/plugins/axios';

Vue.config.productionTip = false;

// tslint:disable-next-line: no-unused-expression
new Http.ApiJwtSercice();

axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(Router);
Vue.use(vClickOutside);
Vue.use(VTooltip);
Vue.use(Buefy, {
    defaultIconPack: 'fas',
});
Vue.use(VueMq, {
    breakpoints: {
        [Device.sm]: 1390,
        [Device.md]: 1390,
        [Device.lg]: 1390,
        [Device.xl]: 1390,
    },
    defaultBreakpoint: 'sm',
});
Vue.use(VeeValidate, {
    i18n,
    i18nRootKey: 'errors',
});

Vue.directive('autofocus', Autofocus);
Vue.directive('scroll', Scroll);

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app');
