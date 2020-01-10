require('./bootstrap');

import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {position: 'bottom-right'});
Vue.use(InertiaApp)

Vue.prototype.$route = (...args) => route(...args).url()
Vue.prototype.$isRoute = (...args) => route().current(...args)

Vue.component('layout', require('./inertia/Shared/Layout.vue').default)
Vue.component('app-layout', require('./inertia/Shared/AppLayout.vue').default)

const app = document.getElementById('app')

const inertia = new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./inertia/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
