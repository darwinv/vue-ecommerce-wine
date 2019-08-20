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
            <span>
              {{textColor}}<button v-on:click="toggleFilter()" class="btn-circle bg-red ml-4">
                  <span v-if="isFilterDisplay">-</span>
                  <span v-else>+</span>
              </button>
            </span>
            
            <!-- <span v-bind:class="{ 'opacity-0': !isFilterDisplay }">
              <button v-on:click="FilterChange('ALL RED')" class="btn-circle bg-pink ml-4">
                  &nbsp;
              </button>
              <button v-on:click="FilterChange('ALL YELLOW')" class="btn-circle bg-yellow ml-4">
                  &nbsp;
              </button>
              <button v-on:click="FilterChange('ALL WHITE')" class="btn-circle bg-white ml-4">
                  &nbsp;
              </button>
            </span> -->
  <b-form-group label="Using options array:">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>

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
            <div class="mt-4">
              <span>4 - 68 Items</span>
            </div>
        </div>
      </div>
  </div>

</template>


<script>
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
      this.toggleFilter();
    },
    toggleFilterPrice(value) {
      this.sortLower = value;
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
 <script>
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Red', value: 'red' },
          { text: 'White', value: 'white' },
          { text: 'Pink', value: 'pink' },
          { text: 'Bubbles', value: 'bubbles' }
        ]
      }
    }
  }
</script>