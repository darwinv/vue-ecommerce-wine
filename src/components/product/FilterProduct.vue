<template>
 
  <div class="col-sm-12 color" >
      <div class="row color-gray2 menu-filter" >
        <b-col sm="2"  offset-sm="1">
          VARIETAL
        </b-col>
        <b-col sm="2">
           PRODUCER
        </b-col>
        <b-col sm="2">
          REGION
        </b-col>
        <b-col sm="2">
          PAIRING
        </b-col>
         <b-col sm="2">
          +
        </b-col>
      </div>
      <div class="filter-container" >
        <div class="float-left">
            <span class="upper">
              {{textColor}}<button v-on:click="toggleFilter()" class="btn-circle bg-red ml-4">
                  <span v-if="isFilterDisplay">-</span>
                  <span v-else>+</span>
              </button>
            </span>

            <span v-bind:class="{ 'opacity-0': !isFilterDisplay }">
              <button v-on:click="FilterChange('pink')" class="btn-circle bg-pink ml-4">
                  &nbsp;
              </button>
              <button v-on:click="FilterChange('red')" class="btn-circle bg-red ml-4">
                  &nbsp;
              </button>
              <button v-on:click="FilterChange('white')" class="btn-circle bg-white ml-4">
                  &nbsp;
              </button>

            </span>
        </div>
        <div class="float-right size-small">
            <div class="color-gray3">
              PRICE:
              <span class="border-gray" >
                <button class="btn-filter-price" v-on:click="toggleFilterPrice(1)"
                  v-bind:class="{ 'active': sortLower == 1 }">
                    HIGH
                </button>-
                <button class="btn-filter-price" v-on:click="toggleFilterPrice(2)"
                  v-bind:class="{ 'active': sortLower == 2 }">
                    LOW
                </button>
                  
              </span>
            </div>
        </div>
      </div>
  </div>

</template>


<script>
import { bus } from "@/main";

export default {
  name: "FilterProduct",
  data: function() {
    return {
      isFilterDisplay: false,
      textColor: 'ALL',
      sortLower: null,
    };
  },
  methods: {
    toggleFilter() {
      this.isFilterDisplay = !this.isFilterDisplay;
    },
    FilterChange(textColor) {
      this.textColor = textColor;
      let arr_color = [];

      arr_color.push(this.textColor);
      let new_data = {"color":arr_color};
      if (this.textColor == 'all'){
          new_data = {} 
      }
      bus.$emit('change', new_data);
      this.toggleFilter();
    },
    toggleFilterPrice(value) {
      this.sortLower = value;
      let price_range = this.sortLower == 2 ? "LOW" : "HIGH";
      let new_data = {"price_range":price_range}
      bus.$emit('change', new_data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";
  .color{
    color: white;
  }
  .color-gray1{
    color: #E5E5E5;
  }
  .color-gray2{
    color: #999999;
    background-color: #101010;
  }
  .color-gray3{
    color: #999999;
  }

  .border-gray{
    border: 1px solid #999999;
    padding: 5px 18px;
    border-radius: 5px;
  }

  .upper{
    text-transform: uppercase;
  }
  .menu-filter > div{
        padding: 15px;
  }
  .btn-circle{
    border-color: white;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  .bg-red{
    background-color: #67123A;
  }
  .bg-pink{
    background-color: #CA6489;
  }
  .bg-yellow{
    background-color: #EFBC3A;
  }
  .bg-white{
    background-color: #FFFFFF;
  }

  .bg-grey{
    background-color: #98a5a5f0;
  }

  
  
  

  .filter-container {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 35px;
    margin-bottom: 30px;
    display: flow-root;
    vertical-align: middle;
  }

  .btn-filter-price {
    background-color: #ff000000;
    color: #999999;
    border: none;
  }
  .btn-filter-price.active{
    color: white;
  }


</style>