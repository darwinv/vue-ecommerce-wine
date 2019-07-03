<template>
  <b-container fluid >
    <div class="home row">
        <MenuHeader />

        <BannerSimple />

        <FooterHome />
      </div>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import MenuHeader from "@/components/layout/MenuHeader.vue";
import FooterHome from "@/components/layout/FooterHome.vue";

import BannerSimple from "@/components/banners/BannerSimple.vue";

export default {
  name: "home",
  components: {
    MenuHeader,
    FooterHome,
    BannerSimple
  }
};
</script>
