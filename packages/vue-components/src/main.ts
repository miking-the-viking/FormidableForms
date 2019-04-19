import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css'; // This line here

Vue.config.productionTip = false;
// import { MdButton } from 'vue-material/dist/components';
// Vue.use(MdButton);

new Vue({
    render: h => h(App)
}).$mount('#app');
