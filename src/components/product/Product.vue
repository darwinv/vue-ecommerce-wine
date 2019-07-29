<template>
  <div  class="container-component">
    <div >
      <router-link :to="{ name: 'product-detail'}" class="" >
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
              <button class="add-to-car"> <img src="@/assets/img/cart_black.svg" ></button>
              <button class="plus-product"><img src="@/assets/img/plus.svg" ></button>
            </div>
        </div>
      </router-link>
      <router-link :to="{ name: 'product-detail'}" class="" >
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
              <button class="add-to-car"> <img src="@/assets/img/cart_black.svg" ></button>
              <button class="plus-product"><img src="@/assets/img/plus.svg" ></button>
            </div>
        </div>
      </router-link>
      <router-link :to="{ name: 'product-detail'}" class="" >
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
              <button class="add-to-car"> <img src="@/assets/img/cart_black.svg" ></button>
              <button class="plus-product"><img src="@/assets/img/plus.svg" ></button>
            </div>
        </div>
      </router-link>
      <router-link :to="{ name: 'product-detail'}" class="" >
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
              <button class="add-to-car"> <img src="@/assets/img/cart_black.svg" ></button>
              <button class="plus-product"><img src="@/assets/img/plus.svg" ></button>
            </div>
        </div>
      </router-link>

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
export default {
  name: "Product"
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

  .container-component{
    background-color: #101010;
    width: 100%;
        padding-top: 25px;
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
