//ToDo: Import vue and name it Vue
import Vue from 'vue';
//ToDo: Import vue-router and name it VueRouter
import VueRouter from 'vue-router';
//ToDo: Import vue-resource and name it VueResource
import VueResource from 'vue-resource';
//ToDo: Import App.vue and name it App
import App from './App.vue';

//ToDo: Import routes.js and use the {} passing routes
import { routes } from './routes';
//ToDo: Import store/store.js and name it store
import store from './store/store.js';
//ToDo Initialize VueRouter using Vue.use()
Vue.use(VueRouter);
//ToDo Initialize VueResource using Vue.use()
Vue.use(VueResource);

Vue.http.options.root = //ToDo: Set Equal to your Firebase Database URL

Vue.filter('currency', (value) => {
  //ToDo: Return value.toLocalString(), Add $ sign before the value
    return $value.toLocalString()
});

const router = new VueRouter({
    routes,
    mode: 'history'
    //ToDo: Set router mode to history
    //ToDo: Pass routes constant imported from above
});

new Vue({
  el: '#app',
    router,
    store,
    //ToDo: Pass the router constant to vue application
    //ToDo: Pass store constant to vue application,
  render: h => h(App)
});
