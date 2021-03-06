import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/HomePage.vue";
import Collection from "./pages/CollectionPage.vue";
import ApiLoginTest from "./pages/TestLoginPage.vue";

import ProductDetail from "./pages/ProductDetailPage.vue";
import Login from "./pages/LoginPage.vue";
import Profile from "./pages/ProfilePage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/collection",
      name: "collection",
      component: Collection
    },
    {
      path: "/login_test",
      name: "login_test",
      component: ApiLoginTest
    },
    {
      path: "/product-detail/:id/",
      name: "product-detail",
      component: ProductDetail
    },
    {
      path: "/login/",
      name: "login",
      component: Login
    },
    {
      path: "/profile/",
      name: "profile",
      component: Profile
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
