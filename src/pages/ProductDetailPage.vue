<template>
  <b-container fluid >
    <div class="row">
        <AppMenuHeader />
        <ProductDetailHeader />
        <ProductVerticalDetail />
        <ProductRelate />
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
import ProductRelate from "@/components/product/ProductRelate.vue";

export default {
  name: "ProductDetail",
  components: {
    AppMenuHeader,
    AppFooter,
    ProductDetailHeader,
    ProductVerticalDetail,
    ProductRelate
  }
};
</script>
