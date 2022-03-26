<template>
<MqResponsive target="md-">
<div class="main-footer">
<div class="footer-item overview">
<a href="#">
  <h3>
    Overview
  </h3>
</a>
</div>
  <div class="footer-item comic">
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
</MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";

export default {
  name: "FooterComponent",
  components: {
    MqResponsive,
  }
}
</script>

<style scoped>
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
.footer-item {
  width: 262px;
  height: 80px;
  border-left: 1px solid #393939;
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
}
.report > a, .comic > a {
  color: #393939;
}
.report > a:hover, .comic > a:hover {
  color: white;
}
</style>