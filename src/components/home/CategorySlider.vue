<template>

    <div class="carousel-wrap relative">
      <div class="title-category" >
        SELECT A CATEGORY
      </div>
    
    <vuescroll-carousel :type="type" >
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img1.jpg') + ')'
        }">
          <div class="content" >
            PAIRING
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img2.jpg') + ')'
        }">
          <div class="content" >
            VARIETAL
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img3.jpg') + ')'
        }">
          <div class="content" >
            PRODUCERS
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img4.jpg') + ')'
        }">
          <div class="content" >
            REGION
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img5.jpg') + ')'
        }">
          <div class="content" >
            PRODUCERS
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img6.jpg') + ')'
        }">
          <div class="content" >
            VARIETAL
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img7.jpg') + ')'
        }">
          <div class="content" >
            PAIRING
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img8.jpg') + ')'
        }">
          <div class="content" >
            REGION
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img9.jpg') + ')'
        }">
          <div class="content" >
            PAIRING
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img10.jpg') + ')'
        }">
          <div class="content" >
            VARIETAL
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img11.jpg') + ')'
        }">
          <div class="content" >
            PRODUCERS
          </div>
        </span>
      </div>
      <div class="child" >
        <span class="carousel-text container"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/slider/img12.jpg') + ')'
        }">
          <div class="content" >
            REGION
          </div>
        </span>
      </div>

    </vuescroll-carousel>
  </div>
</template>

<script>
import Vue from 'vue';
import vuescroll from 'vuescroll';
// import carousel plugin and its css file
import vuescrollCarousel from '@/components/vuescroll-carousel/src/carousel.vue';
import 'vuescroll/dist/vuescroll.css';
// reigstry the plugin

Vue.use(vuescroll);


export default {
  components: { vuescrollCarousel },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

.container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  cursor: grab;
}

.container .content {
    position: absolute;
    font-size: 20px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 22px;
    left: 0;
}
span.carousel-text.container {
    height: 265px;
    margin: 0px 10px;
    padding: 8px;
    border-radius: 15px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.carousel-wrap {
    width: 100% !important;
    background-color: black;
    margin: 80px 0px 60px 0px;
}
.child {
    text-align: center;
    text-shadow: 0px 3px 3px #975a00;
    -webkit-text-shadow: 0px 3px 3px #975a00;
    -moz-text-shadow: 0px 3px 3px #975a00;
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    color: #ff9900;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span.carousel-text img {
    border-radius: 15px;
}
.title-category{
    position: absolute;
    top: -40px;
    color: white;
    left: 0;
    right: 0;
}
</style>