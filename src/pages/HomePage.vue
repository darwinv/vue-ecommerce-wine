<template>
  <b-container fluid >
    <div class="home row">
        <AppMenuHeader />
        <BannerBtn />

        <CategorySlider />
        
        <AppGreenBackground />
        <AppFooter />

      </div>
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import BannerBtn from "@/components/banners/BannerBtn.vue";

import AppGreenBackground from "@/components/layout/AppGreenBackground.vue";
import CategorySlider from "@/components/CategorySlider.vue";

export default {
  name: "home", 
  components: {
    AppMenuHeader,
    BannerBtn,
    AppGreenBackground,
    AppFooter,
    CategorySlider
  }
};
</script>
