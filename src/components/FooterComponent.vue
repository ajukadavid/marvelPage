<template>

<div class="main-footer">
<div class="footer-item overview">
<a href="#">
  <h3>
    Overview
  </h3>
</a>
</div>
  <div class="footer-item comic"
  @click="toggleBorder"
  :class="{
    'border': border
  }"
  >
    <a href="#">
      <h3>
        in comics <br> profile
      </h3>
    </a>

  </div>
  <div class="footer-item report">
    <a href="#">
      <h3>
        in comics full <br>report
      </h3>
    </a>
  </div>
</div>

</template>

<script>

export default {
  name: "FooterComponent",
  data(){
    return {
      border: false
    }
  },
  methods: {
    toggleBorder(){
      this.border = !this.border
    }
  }
}
</script>

<style scoped>
.main-footer {
  display: none;

}
@media only screen and (max-width: 838px) {

  .main-footer {
    display: flex;
    position: fixed;

    bottom: 0;
    left: 0;
    justify-content: space-between;
    width: 100%;
    /* Height of the footer*/
    height: 63px;

  }
  .overview {
    border-top: 5px solid #bf0808;
    color: white;
  }
  .footer-item {
    background-color: #202020;
    position: relative;
    font-size: 10px;
    padding-top: 10px;
    cursor: pointer;
    width: 280px;
    font-weight: bolder;
    height: 90px;
    border-left: 1px solid #393939;
  }
  .report > a, .comic > a {
    color: #393939;
  }
  .report > a:hover, .comic > a:hover {
    color: white;
  }
  .border {
    border-top: 5px solid #bf0808;
  }
}
</style>