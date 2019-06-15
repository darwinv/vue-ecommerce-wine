<template>
    <div class="float-left menu-header w-100"  >
        <div class="menu-items menu-left-items">
          <img src="@/assets/img/menu.png">
          <spam>THE COLLECTION</spam>
          <spam>ABOUT US</spam>
        </div>

        <div class="menu-logo-content">
          <span class="menu-logo-bg"></span>
          <img src="@/assets/img/logo.svg" class="menu-logo">
        </div>

        <div class="menu-items menu-right-items">
          <img class="float-right" src="@/assets/img/car.svg" >
          <img class="float-right" src="@/assets/img/profile.svg" >
          <div class="relative float-right" >
            <input type="text" class="search-input">
            <img class="search-ico" src="@/assets/img/search.svg">
          </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "MenuHeader"
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
      position: absolute;
      right: 10px;
      top: 5px;
  }


  .menu-items {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .menu-items > img, .menu-items > spam, .menu-items > div {
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
  }
  .menu-logo-bg {
    background: #070707;
    width: 150px;
    height: 150px;
    border-radius: 48%;
    margin-left: -18px;
    position: absolute;
  }

  .menu-header {
    height: 105px;
    background-color: #070707;
    color: white;
    position: relative;
    font-size: 20px;
  }
</style>


<style scoped lang="scss">

</style>