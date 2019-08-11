<template>
  <b-container fluid >
    <div class="row">
        <AppMenuHeader />
        <b-col cols="4">
          <LateralProfile />
        </b-col>

        <b-col cols="8">.
        </b-col>

        <AppFooter />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import LateralProfile from "@/components/profile/LateralProfile.vue";

export default {
  name: "login",
  components: {
    AppMenuHeader,
    AppFooter,
    LateralProfile
  }
};
</script>
