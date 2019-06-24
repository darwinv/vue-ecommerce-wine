<template>
  <b-container fluid class="menu-header">
    <b-row>
      <b-col>
        <div>
          <b-nav>
            <b-nav-item>THE COLLECTION</b-nav-item>
            <b-nav-item>ABOUT US</b-nav-item>
          </b-nav>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MenuHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/global.scss";
</style>

<style scoped lang="scss">
.menu-header {
  background-color: $base-dark;
  color: white;
}
</style>
