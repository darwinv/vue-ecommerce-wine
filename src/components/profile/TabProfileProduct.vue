<template>
    <div class="container-component" >
      <div class="tabs">
        <div class="tab-base">
          <label for="tab2-1">WISHLIST</label>
          <input id="tab2-1" name="tabs-two" type="radio" checked="checked">
          
          <div>
            <div class="row" >
              <b-col div sm="12" md="6" lg="4" v-for="item in products" :key="item.id">
                <Product v-bind:item="item"> </Product>
               </b-col> 
            </div>
          </div>
        </div>

        <div class="tab-base tab-2">
          <label for="tab2-2">LAST SHOPPING</label>
          <input id="tab2-2" name="tabs-two" type="radio">
          
          <div>
            <div class="row" >
              <b-col div sm="12" md="6" lg="4" v-for="item in products" :key="item.id">
                <Product v-bind:item="item"> </Product>
               </b-col> 
            </div>
          </div>
        </div>

        <div class="tab-base tab-3">
          <label for="tab3-3">RATING</label>
          <input id="tab3-3" name="tabs-two" type="radio">
          
          <div>
            <div class="row" >
              <b-col div sm="12" md="6" lg="4" v-for="item in products" :key="item.id">
                <Product v-bind:item="item"> </Product>
               </b-col> 
            </div>
          </div>
        </div>


        <div class="tab-base tab-4">
          <label for="tab4-4">CART</label>
          <input id="tab4-4" name="tabs-two" type="radio">
          
          <div>
            <div class="row" >
              <b-col div sm="12" md="6" lg="4" v-for="item in products" :key="item.id">
                <Product v-bind:item="item"> </Product>
               </b-col> 
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import Product from "@/components/product/Product.vue";
import { repofactory } from "@/common/repo_factory.js";

const Collection = repofactory.get('collection')

export default {
  name: "TabProfileProduct",
  components: {
    Product
  },
  data(){
    return {
      products: []
    };
  },
   mounted(){
      //console.log(this.products);
     this.getCollection();
  },
    methods:{
    async getCollection(){
        let payload = {
        }
        try {
          const { data } = await Collection.obtain(payload);
//          console.log(data);
          this.products = data
        } catch (error) {
                if (error.response) {
                /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response);
                }
            }   
    }
  }
};
</script>
<style lang="scss" scoped>
  @import "@/styles/global.scss";
  
  .tabs{
    position:relative;
  }
  .tabs .tab-base [type=radio]:checked + div[data-v-6e336ed6] {
    width: 100%;
    position: absolute;
    z-index: 100;
  }


.tab-base.tab-2 > div{
  margin-left: -25% !important;
}
.tab-base.tab-3 > div{
  margin-left: -50% !important;
}
.tab-base.tab-4 > div{
  margin-left: -75% !important;
}

  

  

  
</style>
