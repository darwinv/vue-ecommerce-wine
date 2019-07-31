<template>
 
  <b-row class="banner-container relative banner-full-height-menu" 
    :style="{ backgroundImage: 'url('+ require('@/assets/img/product/detail_bg.png') +')'}">
         <b-col sm="5" class="product-name">
          <h2  >GRAMERCY CELLARS</h2>
        </b-col>
         <b-col sm="2" class="bottle-img" >
          <img class="img-product" src="@/assets/img/product/bottle.png">
        </b-col>
         <b-col sm="5" class="pruduct-info" >
            <div class="bg-white-detail">
              <div class="bold" >Cabernet Sauvignon 2014</div>
              <div>Columbia Valley, WA</div>
              <div class="price" >$50.00</div>
              <div>
                <span class="product-quantity" >1</span>
                <button class="btn-gray">ADD TO CART</button>
              </div>
              <div class="comment">FREE SHIPPINH + 6 BOTTLES</div>
            </div>
          


          <div  class="wishlist">ADD TO WISHLIST
            <img class="ico-start" src="@/assets/img/WISHLISTSTAR.png" >
            </div>
        </b-col>

  </b-row>

</template>

<script>
export default {
  name: "ProductDetailHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";
  .row.banner-container.relative.banner-full-height-menu {
      background-color: #2a2a2a;
      margin: 0px;
  }
  .bottle-img{
    margin: auto;
  }
  .bottle-img img{
    max-height: 480px;
    margin-top: 50px;
  }
  .product-name{
    padding: 10% 0% 0% 10%;
    text-align: right;
  }
  .product-name h2{
    font-size: 54px;
    font-weight: bold;
  }
  .pruduct-info{
    text-align: right;
    padding: 5% 9% 0% 0%;
  }
  .price {
    margin: 20px 0px;
    font-size: 40px;
  }
  .product-quantity{
    width: 13px;
    height: 13px;
    border: 1px solid white;
    background: #e5e5e5;
    padding: 5px 9px;
    margin-right: 30px;
  }
  .comment {
    color: black;
    font-size: 12px;
    margin: 5px 0px;
}
.wishlist {
    position: absolute;
    bottom: 5%;
    right: 21%;
    color: white;
    vertical-align: bottom;
}
.ico-start{
      margin: 0px 3px 8px 5px;
    width: 25px;
}
</style>
