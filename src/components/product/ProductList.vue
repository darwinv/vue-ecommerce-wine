<template>
  <div  class="container-component">
    <div >
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
    <div class="pagination-product">
      <a  class="circle-pagination" href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a class="circle-pagination" href="#">&raquo;</a>
    </div>
  </div>

</template>


<script>
import Product from "@/components/product/Product.vue";
export default {
  name: "ProductList",
  components: {
    Product
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";
  
  .container-component{
    background-color: #101010;
    width: 100%;
        padding-top: 25px;
  }

  .pagination-product {
      color: #555555;
      margin: 25px 0px;
  }
a.circle-pagination {
    background-color: #282828;
    border-radius: 25px;
    padding: 7px 12px;
    margin: 15px;
}
.pagination-product > a {
    color: #555555;
    margin: 8px;
}
.pagination-product > a:hover {
    color: #ffffff;
}
</style>
