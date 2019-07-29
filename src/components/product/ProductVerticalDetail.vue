<template>
  <div class="" >
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
        <p>Columbia Valley A should be mentioned in the same both while maintaining an outlier’s price point. This is a great example of a winery focused on quality over quantity – the attention to detail pays off in every sniff, every sip of this sensational Washington state Cabernet Sauvignon. Cabernet drinkers: Get on this!.</p>
      </div>
      <div id="VARIETAL" class="tabcontent"
        style="display:none" >
        <p>Columbia Valley B should be mentioned in the same both while maintaining an outlier’s price point. This is a great example of a winery focused on quality over quantity – the attention to detail pays off in every sniff, every sip of this sensational Washington state Cabernet Sauvignon. Cabernet drinkers: Get on this!</p> 
      </div>
      <div id="FLAVOR" class="tabcontent"
        style="display:none" >
        <p>Columbia Valley C should be mentioned in the same both while maintaining an outlier’s price point. This is a great example of a winery focused on quality over quantity – the attention to detail pays off in every sniff, every sip of this sensational Washington state Cabernet Sauvignon. Cabernet drinkers: Get on this!.</p>
      </div>
      <div id="PRODUCER" class="tabcontent"
        style="display:none" >
        <p>Columbia Valley D should be mentioned in the same both while maintaining an outlier’s price point. This is a great example of a winery focused on quality over quantity – the attention to detail pays off in every sniff, every sip of this sensational Washington state Cabernet Sauvignon. Cabernet drinkers: Get on this!</p> 
      </div>
      <div id="OTHER" class="tabcontent"
        style="display:none" >
        <p>Columbia Valley E should be mentioned in the same both while maintaining an outlier’s price point. This is a great example of a winery focused on quality over quantity – the attention to detail pays off in every sniff, every sip of this sensational Washington state Cabernet Sauvignon. Cabernet drinkers: Get on this!.</p>
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
  /* Style the tab */
.tab {
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f100;
  border-color: #ff000000;
  width: 30%;
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
}

.container-welove{
  width: 100%;
  margin: 45px 0px;
  padding: 0% 9% 0% 10%;
}
.ico-vertical{
  margin: 5px 15px;
}
</style>
