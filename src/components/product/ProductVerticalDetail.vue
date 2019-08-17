<template>
  <div class="container-component w-100" 
  :style="{ backgroundImage: 'url('+ require('@/assets/img/product/welovebg.png') +')'}">
    <div class="container-welove">
      <div class="tab">
        <button class="tablinks active" v-on:click="chageTab($event, 'WHAT')" >
          <img src="@/assets/img/product/ICON_FLAVOR.png" class="ico-vertical">

          WHAT WE LOVE</button>
        <button class="tablinks " v-on:click="chageTab($event, 'VARIETAL')" >
          <img src="@/assets/img/product/ICON_OTHER_DETAILS.png" class="ico-vertical">

          VARIETAL</button>
        <button class="tablinks " v-on:click="chageTab($event, 'FLAVOR')" >
          <img src="@/assets/img/product/ICON_PRODUCER.png" class="ico-vertical">

          FLAVOR</button>
        <button class="tablinks " v-on:click="chageTab($event, 'PRODUCER')" >
          <img src="@/assets/img/product/ICON_VARIETAL.png" class="ico-vertical">

          PRODUCER</button>
        <button class="tablinks " v-on:click="chageTab($event, 'OTHER')" >
          <img src="@/assets/img/product/ICON_WHAT_WE_LOVE.png" class="ico-vertical">

          OTHER DETAILS</button>
      </div>

      <div id="WHAT" class="tabcontent" >
        
        <p>Columbia Valley should be mentioned in the same both while maintaining an outlier’s price point. This is a great example of a winery focused on quality over quantity – the attention to detail pays off in every sniff, every sip of this sensational Washington state Cabernet Sauvignon. Cabernet drinkers: Get on this!</p>
      </div>
      <div id="VARIETAL" class="tabcontent"
        style="display:none" >
          <div class="row pt-5">
            <b-col lg="9" sm="12" class="text-left" >
            <div class="mt-3" >
              <span class="subtitle" >Cabernet Sauvignon</span>
              <div class="range-cont" >
                <input type="range" class="custom-range" disabled="disabled" value="95" > 
                <span class="range-data" > 95%</span> 
              </div>
              
            </div>
            <div class="mt-3" >
              <span class="subtitle" >Cabernet Franc</span>
              <div class="range-cont" >
                <input type="range" class="custom-range" disabled="disabled" value="4" > 
                <span class="range-data" > 4%</span>
              </div> 
            </div>
            <div class="mt-3" >
              <span class="subtitle" >Petit Verdot</span>
              <div class="range-cont" >
                <input type="range" class="custom-range" disabled="disabled" value="1" > 
                <span class="range-data" > 1%</span>
              </div> 
            </div>
            </b-col>
            <b-col lg="3" sm="12" >
              <span>RECOMMENDED GLASS</span>
              <img src="@/assets/img/product/glassofwine.png" >
            </b-col>
          </div>
      </div>
      <div id="FLAVOR" class="tabcontent"
        style="display:none" >

        <div class="mb-5" >
          <span>FRUITINESS</span>
          <span class="white circle ml-2"></span>
          <span class="white circle"></span>
          <span class="white circle"></span>
          <span class="black circle"></span>
          <span class="black circle mr-5"></span>
          
          <span>DRY</span>
          <span class="white circle ml-2"></span>
          <span class="black circle"></span>
          <span class="black circle"></span>
          <span class="black circle"></span>
          <span class="black circle"></span>
          
        </div>

        <p>The fruit component is red, purple, and black all at once, with everything from blackberry to red currant to cassis intertwined with scents of graphite, tobacco, espresso grounds, chocolate, and wet gravel. The velvety tannins have a telltale New World feel, and while the ripeness and weight are considerable it doesn’t feel heavy. The finish is fresh and darkly savory, with coffee and earth tones lingering long after you’ve finished a sip. In the spirit of the great West Coast Cabernets, this will wow you after 30-60 minutes in a decanter.</p>

      </div>
      <div id="PRODUCER" class="tabcontent"
        style="display:none" >
        <p>Gramercy’s mission is simple: to make wines that complement food, provide great pleasure, and stand out as uniquely made in Washington.</p><p> One of the most exciting additions to Washington’s ever-expanding wine scene is Gramercy Cellars, founded by Master Sommelier Greg Harrington and his wife, Pam, in 2005. Greg’s wines are impeccably made, but perhaps more importantly, impeccably sourced—his lineup reads like a “who’s who” of Eastern Washington viticulture, and as we dig deeper into the stories of these vineyards we gain a greater appreciation of Washington State’s importance as a terroir.</p> 
      </div>
      <div id="OTHER" class="tabcontent"
        style="display:none" >


        <div class="mb-5" >
          <div class="inline-block mr-3" >
            <div class="inline-block mr-3" >
              <img src="@/assets/img/product/medal.png" >
            </div>
            <div class="inline-block" >
              <div  >
                <span class="mb-3" >93pts</span> 
              </div>
              <div >
                <span>Robert Parker</span> 
              </div>
            </div>
          </div>
          <div class="inline-block mr-3" >
            <div class="inline-block mr-3" >
              <img src="@/assets/img/product/medal.png" >
            </div>
            <div class="inline-block" >
              <div  >
                <span class="mb-3" >93pts</span> 
              </div>
              <div >
                <span>Robert Parker</span> 
              </div>
            </div>
          </div>
        </div>

        <p>Sourced from Phinny Hill, Sagemoor Vineyard, Octave Estate Vineyards.</p>
        <p>14.3% alc – 1,421 cases made.</p>
        <p>Drink now through 2037.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductVerticalDetail",
  data: function() {
    return {
      isFilterDisplay: false,
      textColor: 'ALL',
      sortLower: null,
    };
  },
  props: ["product"],
  methods: {
    chageTab(evt, name) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        console.log(tabcontent)
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(name).style.display = "block";
      evt.currentTarget.className += " active";
    }
  }

};


// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";


#VARIETAL .subtitle{
    width: 160px;
    float: left;
}

#VARIETAL .range-data{
  position: absolute;
  right: 5px;
}
.range-cont input{
  width: 90%
}
.range-cont span{
  width: 10%;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 95%;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: white;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 0px solid #000000;
  height: 24px;
  width: 24px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8px;
}


span.circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
    margin: 0px 5px -2px 0px;
    border: 1px solid #ffffff6e;
}
.white{
  background-color: white;
}
.black{
  background-color: black;
}



  /* Style the tab */
.tab {
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f100;
  border-color: #ff000000;
  width: 25%;
  height: 300px;
}

/* Style the buttons inside the tab */
.tab button {
  display: block;
  background-color: inherit;
  color: #9a9a9a;
  padding: 0px 16px 40px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  color: white;
}

/* Create an active/current "tab button" class */
.tab button.active {
      /* background-color: #ccc; */
    color: white;
    font-weight: bold;

}

/* Style the tab content */
.tabcontent {
  float: left;
    padding: 8px 12px;
    /* border: 1px solid #ccc; */
    color: white;
    width: 70%;
    border-left: none;
    height: 460px;
    text-align: left;
}

.container-welove{
  width: 100%;
  margin: 45px 0px;
  padding: 0% 9% 0% 10%;
}
.ico-vertical{
  margin: 5px 15px;
}
.container-component{
  background-color: #2a2a2a;
}
</style>
