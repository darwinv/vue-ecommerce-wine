<template>
  <div
    class="banner-container relative banner-full-height-menu"
    :style="{
      backgroundImage: 'url(' + require('@/assets/img/banner.png') + ')'
    }"
  >
    <b-col sm="4" offset-sm="*6" class="container-text">
      <p>
        Pollux is an online wine shop for budding and experienced wine lovers to
        purchase artisan wines made the old-fashioned way: by hand.
      </p>
      <p>
        Discover new regions, new wine styles, and most importantly what you
        like.
      </p>
      <button class="global-btn-dark mt-5">
        SHOP BY CATEGORY
      </button>
    </b-col>
    <img class="img-fluid newsletter" src="@/assets/img/newsletter.png" alt="newsletter" />
  </div>
</template>

<script>
export default {
  name: "BannerBtn"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styles/global.scss";

.banner-container {
  background-color: #d2d2d2f5;
  display: inline-grid;
  max-width: 100%;
  width: 100%;
  background-size: cover;
  min-height: 85vh;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 2%;
}
.container-text {
  position: absolute;
  top: 15%;
  right: 10%;
  color: white;
  text-align: justify;
}

.container-text p {
  font-size: 20px;
}

.newsletter{
  position:absolute;
  right:2%;
  bottom:4%;
}


/* Small devices  */
@media (max-width: 576px) {
  .container-text {
    right: auto;
  }
}
</style>
