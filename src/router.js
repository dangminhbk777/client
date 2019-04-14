import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import RegisterUser from "./pages/user/UserRegister.vue";
import TripByDriverList from "./pages/tripbydriver/TripByDriverList.vue";
import TripByDriverCreate from "./pages/tripbydriver/TripByDriverCreate.vue";
import TripByHitchhikerCreate from "./pages/tripbyhitchhiker/TripByHitchhikerCreate.vue";
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
    {
      path: '/register-user',
      name: 'registerUser',
      component: RegisterUser
    },
    {
      path: '/trip-by-driver',
      name: 'trip-by-driver',
      component: TripByDriverList,
    },
    {
      path: '/trip-by-driver-create',
      name: 'trip-by-driver-create',
      component: TripByDriverCreate,
    },
    {
      path: '/trip-by-hitchhiker-create',
      name: 'trip-by-hitchhiker-create',
      component: TripByHitchhikerCreate,
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
