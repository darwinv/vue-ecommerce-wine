<template>
  <div>
    <b-row class="green-bar" align-v="center">
      <b-col>
        <p class="align-middle">DONATE 1% FOR THE WORLD HERE</p>
      </b-col>
    </b-row>

    <b-row class="text-center footer" align-v="center">
      <b-col>
        <img src="@/assets/img/facebook-box.png" alt="fb" />
        <img src="@/assets/img/instagram.png" alt="in" />
      </b-col>
      <b-col cols="8"></b-col>
      <b-col>
        <a href="#"> Contact Us </a>
        <a href="#" class="mar20L"> FAQ</a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "FooterHome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/global.scss";

.green-bar {
  background-color: #133117;
  color: white;
  height: 40px;
  font-size: calc(5px + 1vw);
}

.mar20L {
  margin-left: 20px;
}

.footer {
  background-color: #2e2e2e;
  color: white;
  height: 122px;
}
</style>
