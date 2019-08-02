<template>
  <div class="w-100">
    <div class="green-bar" align-v="center" 
      v-bind:class="{ 'hide': type==undefined }" >
      <b-col>
        <p class="align-middle p-2">DONATE 1% FOR THE WORLD HERE</p>
      </b-col>
    </div>

    <div class="text-center" align-v="center"
      v-bind:class="{ 'footer': type=='home', 'footer-green': type==undefined  }">

      <div class="float-left m-ico-footer">
        <img src="@/assets/img/facebook-box.png" alt="fb" />
        <img src="@/assets/img/instagram.png" alt="in" />
      </div>

      <div class="float-right m-ico-footer">
        <a href="#"> Contact Us {{ type }}</a>
        <a href="#" class="mar20L"> FAQ</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  props: ['type']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styles/global.scss";

.green-bar {
  background-color: #133117;
  color: white;
  height: 40px;
  font-size: calc(5px + 1vw);
  margin-right: 0;
}

.mar20L {
  margin-left: 20px;
}

.m-ico-footer {
  margin: 40px 8%;
}

.footer-green .m-ico-footer {
    margin: 16px 8% 8px 8%;
}
.footer-green {
  background-color: #00603A;
  display: flow-root;
}
.footer {
  color: white;
  height: 122px;
  margin-right: 0;
}
</style>
