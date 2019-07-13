import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/HomePage.vue";
import Collection from "./pages/CollectionPage.vue";
import ApiPage from "./pages/TestApiPage.vue";


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
