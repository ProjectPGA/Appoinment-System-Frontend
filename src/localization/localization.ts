import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);

// Create a new file if there is a new language
import en from './locales/locale.en';
import de from './locales/locale.de';

// Add more languages here
const messages = {
    en,
    de,
};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'de', // set default
    messages, // set locale messages
});

export default i18n;
