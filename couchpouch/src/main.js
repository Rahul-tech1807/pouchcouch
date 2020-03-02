import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { routes } from './routes'

import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from './plugins/vuetify';
import PouchDB from 'pouchdb-browser';
// import PouchDBFind from 'pouchdb-find';

import PouchVue from 'pouch-vue';
import VueSweetAlert from 'vue-sweetalert'
 
Vue.use(VueSweetAlert)

Vue.use(PouchVue, {
    pouch: PouchDB, // optional if `PouchDB` is available on the global object
    // defaultDB: `${getEndpoints().couch}/fares`,
    //debug: '*',
});


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
