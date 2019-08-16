import '@babel/polyfill';
import axios from 'axios';
import Buefy from 'buefy';
import VTooltip from 'v-tooltip';
import vClickOutside from 'v-click-outside';
import VeeValidate from 'vee-validate';
import Vue from 'vue';
import VueMq from 'vue-mq';

import '@/components/tracking/matomo';
import '@/class-component-hooks';
import App from '@/App.vue';
import { router } from '@/router';
import store from '@/vuex/store';
import '@/registerServiceWorker';
import '@/components/utils/closest';
import i18n from '@/localization/localization';
import '@/components/elements/PrismaElement';
import { Http } from './namespaces/Http';

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
        [Device.sm]: 769,
        [Device.md]: 1024,
        [Device.lg]: 1216,
        [Device.xl]: 1408,
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
