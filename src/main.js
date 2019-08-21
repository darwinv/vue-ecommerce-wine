import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";
import VeeValidate from "vee-validate";

import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
