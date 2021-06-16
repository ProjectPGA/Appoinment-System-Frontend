import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import Router from 'vue-router';

import 'vue-toastification/dist/index.css';
import './styles/main.scss';

import VueMq from 'vue-mq';
import axios from 'axios';
import Buefy from 'buefy';
import vClickOutside from 'v-click-outside';
import Toast from 'vue-toastification';
import i18n from '@/localization/localization';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fab, fas, far);

import { Scroll } from '@/directives/Scroll';
import { Device } from '@/models/utils/Device';
import { WindowResize } from '@/directives/WindowResize';
import { Autofocus } from '@/directives/AutofocusDirective';

Vue.config.productionTip = false;

axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(Router);
Vue.use(Toast, {
  position: 'bottom-left',
});
Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'fa',
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
Vue.use(vClickOutside);

Vue.directive('scroll', Scroll);
Vue.directive('autofocus', Autofocus);
Vue.directive('resize', WindowResize);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
