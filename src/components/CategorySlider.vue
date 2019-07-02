<template>
  <div class="slides">
    <h4> SELECT A CATEGORY</h4>
    <div class="slides-inner">
      <div class="slide-div" v-for="slide in slides" :key="slide">
         <Slide v-bind:slide="slide"> </Slide> 
      </div>
    </div>

    <progress max="100" value="80" ></progress>
  </div>
</template>

<script>
import Slide from "@/components/Slide.vue";


export default {
  data() {
    return {
      slides: [
        { name:"PAIRING", src: "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg" },
        { name:"VARIETAL", src: "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg" },
        { name:"PRODUCERS", src: "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg" },
        { name:"PRODUCERS", src: "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg" }
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
  white-space: nowrap;
  margin: 70.3125px 0;
  padding-bottom: 10px;
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
}


.slides-inner:hover {
  -webkit-transform: translate3d(-62.5px, 0, 0);
          transform: translate3d(-62.5px, 0, 0);
}
.slides-inner:hover .slide {
  //opacity: 0.3;
}

.slide-div:hover ~ .slide-div {
  -webkit-transform: translate3d(20px, 0, 0);
  transform: translate3d(20px, 0, 0);
}




.slides{
  background-color: #1D1D1D;
  color: white;
  height: 500px;
  overflow-x: scroll;
  width: 100%;
}

.slides h4{
  font-size: 14px;
  font-weight: bold;
}


progress {
  -webkit-appearance: none;
  border:1px solid;
}

progress[value] {
/* Eliminamos la apariencia por defecto 
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
*/
  height: 2.5%;
  width: 69%;
  margin-top: 4%;

}

progress::-moz-progress-bar { background: #203c26; }
progress::-webkit-progress-value { background-color: #203c26; }
progress::-webkit-progress-bar { background-color: #e6e6e6; }
</style>
