<template>
  <b-col sm class="rectangle-green">
    <b-row>
      <b-col sm >
        <div class="text-box">
          <h3>Naturally Delicious</h3>
          <p>
            Made with organic, biodynamic or sustainably farmed grapes sourced
            from small, independent American winemakers, the wines we sell have
            no added sugar, flavoring agents or other industrial additives, and
            are quality-assured by wine experts.
          </p>
        </div>
      </b-col>
      <b-col sm>
        <div class="text-box">
          <h3>Sustainable Practices</h3>
          <p>
            Horse-driven plows, onsite compost, water conservation, low-waste
            packaging, and no harmful pesticides. The wineries we work with seek
            to minimize their environmental impact every step of the way. Better
            for our planet, better for you and me.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "GreenBgHome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/global.scss";

.rectangle-green {
  background-image: url("../assets/img/rectangle-green.png");
  height: 100%;
  color: white;
  width: 100%;
}

.rectangle-green .row {
  //vertical-align: baseline;
  padding: 10% 0;
}

.text-box {
  margin-left: 20%;
  margin-right: 10%;
  text-align: left;
  font-size: calc(7px + 1vw);
}

.text-box h3 {
  font-size: calc(15px + 1vw);
}
</style>
