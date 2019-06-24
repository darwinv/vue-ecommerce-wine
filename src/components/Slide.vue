<template>
  <div class="slide">
    <img v-bind:src="slide.src" alt="asda"> 
   
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:  ["slide"]
};
</script>

<style lang="scss" scoped>

img {
  max-width: 100%;
}

</style>
