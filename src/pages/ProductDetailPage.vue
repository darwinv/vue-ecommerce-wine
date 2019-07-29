<template>
  <b-container fluid >
    <div class="home row">
        <AppMenuHeader />
        <ProductDetailHeader />
        <ProductVerticalDetail />
        <AppFooter />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import ProductDetailHeader from "@/components/product/ProductDetailHeader.vue";
import ProductVerticalDetail from "@/components/product/ProductVerticalDetail.vue";

export default {
  name: "home",
  components: {
    AppMenuHeader,
    AppFooter,
    ProductDetailHeader,
    ProductVerticalDetail
  }
};
</script>
