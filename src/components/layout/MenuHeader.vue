<template>
  <div id="menu-header" class="w-100">
    <div class="float-left menu-header w-100" >

        <div class="menu-items menu-left-items">
          <img v-on:click="toggleMenu" src="@/assets/img/menu.png" class="pointer">
          <router-link :to="{ name: 'collection'}" class="d-none d-md-inline-block" >THE COLLECTION</router-link>
          <span class="d-none d-md-inline-block">ABOUT US</span>
        </div>

        <div class="menu-logo-content">
          <span class="menu-logo-bg"></span>
          <router-link :to="{ name: 'home'}" >
            <img src="@/assets/img/logo.svg" class="menu-logo">
          </router-link>
        </div>

        <div class="menu-items menu-right-items d-none d-md-block">
          <img class="float-right" src="@/assets/img/car.svg" >
          <img class="float-right" src="@/assets/img/profile.svg" >
          <div class="relative float-right" >
            <input type="text" class="search-input">
            <img class="search-ico" src="@/assets/img/search.svg">
          </div>
        </div>

    </div>

    <div class="menu-side transition-opacity" v-bind:class="{ 'opacity-0': isMenuSideHide }">
       <div class="d-block d-md-none">
          <div class="relative" >
            <input type="text" class="search-input">
            <img class="search-ico" src="@/assets/img/search.svg">
          </div>
          <img class="m-2" src="@/assets/img/car.svg" >
          <img class="m-2" src="@/assets/img/profile.svg" >
        </div>

      <h2>ABOUT US</h2>
        <a>About Pollux</a>
        <a>Winery Producers</a>
        <a>Private Events</a>
      <h2>OUR SHOP</h2>
        <a>All Wines</a>
        <a>Best Sellers</a>
        <a>New Releases</a> 
      <h2>LATEST NEWS</h2>
    </div>

  </div>
</template>

<script>

export default {
  name: "MenuHeader",
  data: function() {
         return  {
           isMenuSideHide: true,
         }
    },
  methods: {
    toggleMenu() {
      this.isMenuSideHide = !this.isMenuSideHide;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";

  .search-input{
    border: 0px solid;
    border-radius: 1rem;
    background-color: #303030;
    color:#b5b5b5;
    outline: none;
    padding: 1px 15px;
    width: 200px;
  }

  .search-ico{
    padding: 0px;
    right: 10px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .menu-items {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .menu-items > img, .menu-items > span, .menu-items > div, .menu-items > a {
    margin: 0px 20px 0px 20px;
    font-weight: bold;
  }
  .menu-left-items {
    left: 0px;
    padding-left: 20px;
  }
  .menu-right-items {
    right: 0px;
    padding-right: 20px;
  }

  .menu-logo {
    position: relative;
    z-index: 1;
  }
  .menu-logo-bg {
    background: #070707;
    width: 150px;
    height: 150px;
    border-radius: 48%;
    margin-left: -20px;
    position: absolute;
    z-index: 1;
  }

  .menu-header {
    height: 105px;
    background-color: #070707;
    color: white;
    position: relative;
    font-size: 20px;
  }

  .menu-header a {
    color: white;
  }
  .menu-side {
    background-color: #13110fd1;
    color: white;
    text-align: left;
    padding: 30px 85px 0px 55px;
    padding-bottom: 40px;
    position: absolute;
    top: 105px;
    z-index: 1;
  }
  .menu-side > a {
    display: block;
    font-size: 20px;
    margin-botton: 20px;
  }
  .menu-side > h2 {
    font-size: 25px;
    margin-top: 30px;
  }

</style>

