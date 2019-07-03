<template>
 
  <div class="banner-container relative" 
    :style="{ backgroundImage: 'url('+ require('@/assets/img/banner-collection.png') +')'}">
        <span class="title">
          THE COLLECTION
        </span>
  </div>

</template>

<script>
export default {
  name: "BannerSimple"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";

 .banner-container {
    background-color: #d2d2d2f5;
    display: inline-grid;
    height: calc(100vh - 100px);
    max-width: 100%;
    width: 100%;
    background-size: cover;
    min-height: 85vh;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .banner-container span.title{
    position: absolute;
    bottom: 6%;
    color: #2E2E2E;
    left: 10%;
    font-size: 70px;
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
