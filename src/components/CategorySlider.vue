<template>
  <div class="slides">
    <h4> SELECT A CATEGORY</h4>
    <div class="slides-inner">
      <div class="slide-div" v-for="slide in slides" :key="slide">
         <Slide v-bind:slide="slide"> </Slide> 
      </div>
    </div>
  </div>
</template>

<script>
import Slide from "@/components/Slide.vue";


export default {
  data() {
    return {
      slides: [
        { src: "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg" },
        { src: "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg" },
        { src: "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg" }
      ],
      innerWidth:0,
      singleWidth:0,
    };
  },
  props:{
    itemsPerSlide:{
      type:null,
      default:1
    }
  },
  components: {
    Slide
  },
  
  mounted: function (){
    let singleWidth = this.$el.clientWidth/this.itemsPerSlide
    this.$set('singleWidth', singleWidth)
    this.$set('innerWidth', innerWidth * this.slides.length)
  }
};
</script>

<style lang="scss" scoped>
.slide-div{
  display: inline-block;
  width: 33%;
}

.slides-inner{
  margin-top: 10%;
}

.slides{
  background-color: #1D1D1D;
  color: white;
  height: 500px;
}

.slides h4{
  font-size: 14px;
  font-weight: bold;
}

</style>
