/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue';

import Vue from 'vue';
import Router from 'vue-router';
import VTooltip from 'v-tooltip';
import Buefy from 'buefy';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import i18n from '@/localization/localization';

Vue.use(Router);
Vue.use(VTooltip);
Vue.use(Buefy);
Vue.use(Vuex);
Vue.use(VeeValidate, {
    locale: 'de',
    // TODO check how to load localized default messages
    i18n,
    i18nRootKey: 'errors',
});

require('../../src/stories');

function loadStories() {}

configure(loadStories, module);
