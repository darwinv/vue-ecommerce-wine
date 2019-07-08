<template>
  <div id="slider_id" class="slides">
    <h4>SELECT A CATEGORY</h4>
    <div class="slides-inner">
      <div class="slide-div" v-for="slide in slides" :key="slide">
        <Slide v-bind:slide="slide"> </Slide>
      </div>
    </div>

    <div class="progress-container">
        <div class="progress-bar" id="mybar"> </div>

    </div>
  </div>
</template>

<script>
import Slide from "@/components/Slide.vue";

export default {
  data() {
    return {
      slides: [
        {
          name: "PAIRING",
          src:
            "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg"
        },
        {
          name: "VARIETAL",
          src:
            "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg"
        },
        {
          name: "PRODUCERS",
          src:
            "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg"
        },
        {
          name: "PRODUCERS",
          src:
            "https://cutpcdnwimages.azureedge.net/-/media/images/retail/wine/monthly-heroes/8938-great-wines-under-20_642x340.jpg"
        }
      ],
      innerWidth: 0,
      singleWidth: 0
    };
  },
  props: {
    itemsPerSlide: {
      type: null,
      default: 1
    }
  },
  components: {
    Slide
  },

  mounted: function() {
    //let singleWidth = this.$el.clientWidth / this.itemsPerSlide;
    //this.$set("singleWidth", singleWidth);
    //.$set("innerWidth", innerWidth * this.slides.length);

      var row = document.getElementById("slider_id")
      row.onscroll = function() {myFunction()};

      function myFunction() {
        var winScroll = row.scrollLeft;
        var width = row.scrollWidth - row.clientWidth
        var scrolled = (winScroll / width) * 100;
        document.getElementById("mybar").style.width = scrolled + "%";
        }
  }
};
</script>

<style lang="scss" scoped>
.slide-div {
  display: inline-block;
  width: 33%;
}

.slides-inner {
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


.slide-div:hover ~ .slide-div {
  -webkit-transform: translate3d(20px, 0, 0);
  transform: translate3d(20px, 0, 0);
}

.slides {
  background-color: #1d1d1d;
  color: white;
  height: 500px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
}

.slides h4 {
  font-size: calc(4px + 1vw);
  font-weight: bold;
}

.progress-container {
    width: 60%;
    height: 8px;
    position: sticky;
    background: #13121240;
    left: 20%;
    border: 1px #fff2f2 solid;
}
.progress-bar {
  height: 8px;
  background: #2e683a;
  width: 0%;
}
</style>
