<template>
    <router-link :to="{ name: 'product-detail', params: {id:item.id }}" class="" >
      <div class="product-container" 
        :style="{ backgroundImage: 'url('+ require('@/assets/img/product/product_bg.svg') +')'}">
          <div class="mt-1 title-product">
            <span>GRAMERCY CELLARS</span>
          </div>
          <div>
            <img class="img-product" v-bind:src="item.images[0].thumbnail">
          </div>
          <div class="price">
            <span>$ {{item.price}}</span>
          </div>
          <div class="description">
            <span>{{ item.title }}</span>
          </div>
          <div class="address">
            <span>{{ item.location }}</span>
          </div>
          <div class="foot-product mt-3">
            <button class="add-to-car"> <img src="@/assets/img/cart_black.svg" ></button>
            <button class="plus-product"><img src="@/assets/img/plus.svg" ></button>
          </div>
      </div>
    </router-link>
</template>


<script>
export default {
  name: "Product",
    data() {
    return {};
  },
  props: ["item"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";
  .product-container{
    margin: 0px 6px;
    color: white;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  .product-container:hover{
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
  }

  .product-container:hover .foot-product {
    visibility: visible;
    opacity: 1;
  }
  .foot-product {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.4s linear;
  }

  .product-container {
      font-weight: bold;
  }
  .product-container {
      width: 250px;
      background-size: cover;
      display: inline-block;
  }
  .img-product{
    max-width: 90%;
    max-height: 285px;
  }
  .title-product{
    font-size: 18px;
  }
  .price{
    font-size: 26px;
  }
  .description{
    font-size: 15px;
  }
  .address{
    font-size: 12px;
  }

  .add-to-car{
    width: 80%;
  }
  .plus-product{
    width: 20%;
    background: #ff000000;
    border: none;
    color: white;
  }

</style>
