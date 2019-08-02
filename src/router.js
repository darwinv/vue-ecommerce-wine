import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/HomePage.vue";
import Collection from "./pages/CollectionPage.vue";
import ApiPage from "./pages/TestApiPage.vue";
import ApiLoginTest from "./pages/TestLoginPage.vue";

import ProductDetail from "./pages/ProductDetailPage.vue";

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
      path: "/api_test",
      name: "api_test",
      component: ApiPage
    },
    {
      path: "/login_test",
      name: "login_test",
      component: ApiLoginTest
    },
    {
      path: "/product-detail/1/",
      name: "product-detail",
      component: ProductDetail
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
