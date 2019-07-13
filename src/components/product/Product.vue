<template>
 
  <div class="container-component" >
    <div class="product-container" 
      :style="{ backgroundImage: 'url('+ require('@/assets/img/product/product_bg.svg') +')'}">
        <div class="mt-1 title-product">
          <span>GRAMERCY CELLARS</span>
        </div>
        <div>
          <img class="img-product" src="@/assets/img/product/bottle.png">
        </div>
        <div class="price">
          <span>$50</span>
        </div>
        <div class="description">
          <span>Cabernet Sauvignon</span>
        </div>
        <div class="address">
          <span>2014 | Columbia Valley, WA.</span>
        </div>
        <div class="foot-product mt-3">
          <button class="add-to-car"> <img src="@/assets/img/car.svg" ></button>
          <button class="plus-product">+</button>
        </div>
    </div>
    
  </div>

</template>


<script>
export default {
  name: "Product"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";
  .product-container{
    color: white;
  }
  .container-component{
    background-color: #101010;
    width: 100%;
  }
  .product-container {
      font-weight: bold;
  }
  .product-container {
      width: 250px;
      height: 540px;
      background-size: cover;
      display: inline-block;
  }
  .img-product{
    max-width: 90%;
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
  .foot-product{
    display: flex;
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
