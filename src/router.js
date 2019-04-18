import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import UserRegister from "./pages/user/UserRegister.vue";
import TripByDriverList from "./pages/tripbydriver/TripByDriverList.vue";
import TripByDriverCreate from "./pages/tripbydriver/TripByDriverCreate.vue";
import TripByDriverDetail from "./pages/tripbydriver/TripByDriverDetail.vue";
import TripByDriverListRegister from "./pages/tripbydriver/TripByDriverListRegister.vue";
import TripByHitchhikerList from "./pages/tripbyhitchhiker/TripByHitchhikerList.vue";
import TripByHitchhikerCreate from "./pages/tripbyhitchhiker/TripByHitchhikerCreate.vue";
import TripByHitchhikerDetail from "./pages/tripbyhitchhiker/TripByHitchhikerDetail.vue";
import Login from "./pages/Login.vue";
import PageNotFound from "./pages/404.vue";
import { URL_PAGE_LOGIN, URL_PAGE_REGISTER, AUTHORIZATION, DEFAULT_LOGIN } from './services/variables.js'

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
    // User
    {
      path: '/user/register',
      name: 'UserRegister',
      component: UserRegister
    },
    // Trip by driver
    {
      path: '/trip-by-driver',
      name: 'TripByDriverList',
      component: TripByDriverList,
    },
    {
      path: '/trip-by-driver/create',
      name: 'TripByDriverCreate',
      component: TripByDriverCreate,
    },
    {
      path: '/trip-by-driver/:driverId',
      name: 'TripByDriverDetail',
      component: TripByDriverDetail,
      props: true
    },
    {
      path: '/trip-by-driver/:driverId/list-register',
      name: 'TripByDriverListRegister',
      component: TripByDriverListRegister,
      props: true
    },
    // Trip by hitchhiker
    {
      path: '/trip-by-hitchhiker',
      name: 'TripByHitchhikerList',
      component: TripByHitchhikerList,
    },
    {
      path: '/trip-by-hitchhiker/create',
      name: 'TripByHitchhikerCreate',
      component: TripByHitchhikerCreate,
    },
    {
      path: '/trip-by-hitchhiker/:hitchhikerId',
      name: 'TripByHitchhikerDetail',
      component: TripByHitchhikerDetail,
      props: true
    },
    // Authentication
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // System error
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
  const publicPages = [URL_PAGE_LOGIN, URL_PAGE_REGISTER];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem(AUTHORIZATION);

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
