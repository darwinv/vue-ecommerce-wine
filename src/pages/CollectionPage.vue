<template>
  <b-container fluid >
    <div class="home row">
        <AppMenuHeader />
        <BannerSimple />
        <FilterProduct />
        <ProductList />
        <AppFooter />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import BannerSimple from "@/components/banners/BannerSimple.vue";

import FilterProduct from "@/components/product/FilterProduct.vue";
import ProductList from "@/components/product/ProductList.vue";
export default {
  name: "home",
  components: {
    BannerSimple,
    FilterProduct,
    AppMenuHeader,
    AppFooter,
    ProductList
  }
};
</script>
