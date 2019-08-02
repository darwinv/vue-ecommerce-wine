<template>
  <b-container fluid >
    <div class="row">
        <AppMenuHeader />
        <Login />
        <AppFooter />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import Login from "@/components/login/Login.vue";
export default {
  name: "login",
  components: {
    Login,
    AppMenuHeader,
    AppFooter
  }
};
</script>
