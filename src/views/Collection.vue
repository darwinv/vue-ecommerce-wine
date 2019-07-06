<template>
  <b-container fluid >
    <div class="home row">
        <MenuHeader />

        <BannerSimple />
        <FilterProduct />
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

import FilterProduct from "@/components/product/FilterProduct.vue";

export default {
  name: "home",
  components: {
    MenuHeader,
    FooterHome,
    BannerSimple,
    FilterProduct
  }
};
</script>
