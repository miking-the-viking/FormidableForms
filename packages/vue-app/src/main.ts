import Vue from 'vue';
import App from './App.vue';
import router from './routing';
import store from '@/store/index';
import './registerServiceWorker';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css'; // This line here
Vue.use(VueMaterial);

import '@/style/app.scss';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

import VueHighlightJS from 'vue-highlightjs';
// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
