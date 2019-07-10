<template>
  <b-container fluid >
    <div class="home row">
        <AppMenuHeader />

        <BannerSimple />

        <AppFooter />
      </div>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import BannerSimple from "@/components/banners/BannerSimple.vue";

export default {
  name: "home",
  components: {
    AppMenuHeader,
    AppFooter,
    BannerSimple
  }
};
</script>
