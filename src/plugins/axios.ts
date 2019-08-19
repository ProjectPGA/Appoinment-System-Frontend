import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
const baseURL = 'http://192.168.137.1:3000';
axios.defaults.baseURL = baseURL;
Vue.use(VueAxios, axios);
