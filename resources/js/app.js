require('./bootstrap');

import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'

Vue.use(InertiaApp)
Vue.prototype.$route = (...args) => route(...args).url()

Vue.component('layout', require('./inertia/Shared/Layout.vue').default)

const app = document.getElementById('app')

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./inertia/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
