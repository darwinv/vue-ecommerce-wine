<template>
    <div class="container-component" >
      <div>
          <img src="@/assets/img/profile/profile.png" >
      </div>
      <div class="title-profile" >
          <span>MY PROFILE</span>
      </div>
      <div>
        <span>Michael Smith</span>
      </div>
      <div>
          <span>michaelsmith@email.com</span>
      </div>
      <div>
          <span>California</span>
      </div>
      <div class="bold" >
          <span>EDIT</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "LateralProfile"
};
</script>

<style lang="scss" scoped>
  @import "@/styles/global.scss";
  
  .container-component span{
    color:white;
  }
  .container-component img{
    max-width:100%;
  }
  .title-profile{
    font-size:1.5rem;
  }
  .container-component > div {
    margin-top: 15px;
    }
</style>
