import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

// Create a new file if there is a new language
import en from './locales/locale.en';
import es from './locales/locale.es';

// Add more languages here
const messages = {
    en,
    es,
};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'es', // set default
    messages, // set locale messages
});

export default i18n;
