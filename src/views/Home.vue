<template>
  <b-container fluid >
    <div class="home ">
        <MenuHeader />
        <HomeBanner />

        <CategorySlider />
        
        <GreenBgHome />
        <FooterHome />

      </div>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HomeBanner from "@/components/HomeBanner.vue";
import MenuHeader from "@/components/MenuHeader.vue";

import FooterHome from "@/components/FooterHome.vue";
import GreenBgHome from "@/components/GreenBgHome.vue";
import CategorySlider from "@/components/CategorySlider.vue";

export default {
  name: "home",
  components: {
    MenuHeader,
    HomeBanner,
    GreenBgHome,
    FooterHome,
    CategorySlider
  }
};
</script>
