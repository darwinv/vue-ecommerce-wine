<template>
  <div class="slide">
    <img class="img-fluid" v-bind:src="slide.src" v-bind:alt="slide.name" />
    <div class="caption">{{ slide.name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["slide"]
};
</script>

<style lang="scss" scoped>
.slide {
  position: relative;
  transition: 450ms all;
  -webkit-transform-origin: center left;
  transform-origin: center left;
  cursor: pointer;
}

.slide:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 1;
}

.caption {
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.54);
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 20%;
  font-size: calc(9px + 1vw);
  border-top: 1px solid #1d1d1d;
}

.slide-div:hover ~ .slide-div {
  -webkit-transform: translate3d(125px, 0, 0);
  transform: translate3d(125px, 0, 0);
}
</style>
