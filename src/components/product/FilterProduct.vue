<template>
 
  <div class="col-sm-12 color" >
      <div class="row color-gray2 menu-filter" >
        <b-col sm="2"  offset-sm="1">
          VARIETAL
        </b-col>
        <b-col sm="2">
           PRODUCER
        </b-col>
        <b-col sm="2">
          REGION
        </b-col>
        <b-col sm="2">
          PAIRING
        </b-col>
         <b-col sm="2">
          +
        </b-col>
      </div>
      <div class="filter-container" >
        <div class="float-left">
            ALL READ <button class="btn-circle ml-4">+</button>
        </div>
        <div class="float-right size-small">
            <div class="color-gray3">
              PRICE:
              <span class="border-gray">HIGH - LOW</span>
            </div>
            <div class="mt-4">
              <span>4 - 68 Items</span>
            </div>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  name: "FilterProduct"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";
  .color{
    color: white;
  }
  .color-gray1{
    color: #E5E5E5;
  }
  .color-gray2{
    color: #999999;
    background-color: #101010;
  }
  .color-gray3{
    color: #999999;
  }

  .border-gray{
    border: 1px solid #999999;
    padding: 5px 18px;
    border-radius: 5px;
  }

  
  .menu-filter > div{
        padding: 15px;
  }
  .btn-circle{
    border-color: white;
    background-color: #67123A;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .filter-container{
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 35px;
    margin-bottom: 30px;
    display: flow-root;
    vertical-align: middle;
  }

  /* Small devices  */
  @media (max-width: 576px) {
    .banner-container span.title{
      font-size: 44px;
      margin-left: auto;
      margin-right: auto;
      left: 0px;
    }
  }
</style>
