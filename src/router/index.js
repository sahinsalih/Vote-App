import Vue from 'vue'
import Router from 'vue-router'
import VueFire from 'vuefire'
import Home from '@/components/Home'
import Anket from '@/components/Anket'
import Thanks from '@/components/Thanks'

Vue.use(Router)
Vue.use(VueFire)

export default new Router({
    routes: [
        {
        path: '/',
        name: 'Home',
        component: Home
        },
        {
        path: '/anket',
        name: 'Anket',
        component: Anket
        },
        {
        path: '/thanks',
        name: 'Thanks',
        component: Thanks
        }
    ],
    mode: 'history'
})
