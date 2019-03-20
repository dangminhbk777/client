import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import History from "./pages/History.vue";
import Map from "./pages/Map.vue";
import Login from "./pages/Login.vue";
import PageNotFound from "./pages/404.vue";
import { URL_PAGE_LOGIN, TOKEN_NAME, DEFAULT_LOGIN } from './services/variables.js'

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/home',
            component: Home
        },
        {
            path: '/map',
            name: 'map',
            component: Map
        },
        {
            path: '/history',
            name: 'history',
            component: History
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/page-not-found',
            name: 'page-not-found',
            component: PageNotFound
        },
        {
            path: '*',
            redirect: '/page-not-found'
        },
    ]
});
router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = [URL_PAGE_LOGIN];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem(TOKEN_NAME);

    if (authRequired && !loggedIn) {
        return next(URL_PAGE_LOGIN);
    } else if (!authRequired && loggedIn) {
        return next(DEFAULT_LOGIN);
    }

    next();
});

export default router;

// export default new Router({
//     mode: "history",
//     routes: [
//         /*{
//         path: "/",
//         name: "customers",
//         alias: "/customer",
//         component: CustomersList,
//         children: [
//           {
//             path: "/customer/:id",
//             name: "customer-details",
//             component: Customer,
//             props: true
//           }
//         ]
//         },*/
//         {
//             path: '/',
//             name: 'home',
//             alias: '/home',
//             component: Home
//         },
//         {
//             path: '/login',
//             name: 'login',
//             component: Login
//         },
//         {
//             path: '/page-not-found',
//             name: 'page-not-found',
//             component: PageNotFound
//         },
//         {
//             path: '*',
//             redirect: '/page-not-found'
//         },
//     ]
// }).beforeEach((to, from, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/login'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
//
//     if (authRequired && !loggedIn) {
//         return next('/login');
//     }
//
//     next();
// });
