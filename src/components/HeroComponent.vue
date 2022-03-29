<template>
  <div class="hero">
    <div class="image-container">
    </div>
    <div class="text-container">
    </div>
  </div>
</template>


<style scoped>
.hero {
  background: red;
  width: 100vw;
  height:400px;

}
@media only screen and (max-width: 838px) {
  .hero {
    background: blue;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 50px;
  }
}
.image-container {
  width: 100vw;
  height: 400px;
  position: absolute;
  left: 0;
  border: 1px solid red;


  overflow: hidden;
}
img {
  max-width: 100vw;
  height: auto;
}
</style>