<template>
    <div class="container-component" >
        <h1>RELATED PRODUCTS</h1>
        <div>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
    </div>
</template>


<script>
import Product from "@/components/product/Product.vue";
export default {
  name: "ProductRelate",
  components: {
    Product
  }
};
</script>

<style lang="scss" scoped>
  @import "@/styles/global.scss";
  
  .container-component h1 {
    color: white;
    margin: 20px;
  }
  .container-component  {
    width: 100%;
    background-color: #2a2a2a;
    padding-top: 47px;
    padding-bottom: 55px;

  }

</style>
