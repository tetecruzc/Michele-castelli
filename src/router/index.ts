import { i18n } from '@/i18n/base';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect:  `/${i18n.locale}`
    },
    {
        path: '/:lang',
        component: {
            render (c) {return c('router-view')}
        },
        children:
        [
            {
                path: '/',
                name: 'Home',
                meta: {title:'Michele Catelli'},
                component: () => import('@/views/Home.vue')
            },
            {
                path: '*',
                name: 'not-found',
                redirect: '/',
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    window.scroll(0, window.pageYOffset - 300)
    document.title = to.meta.title;
    let language = to.params.lang;
    if (!language){
        language = 'en'
    }
    i18n.locale = language
    next();
});

export default router;