<template>
  <div class="hero">
    <div class="image-container">
    </div>
    <div class="text-container">
      <div class="text-body">
        <h1>
          <span class="small-title">carol danvers</span> <br>
          <span class="bigger-text">captain america</span>
        </h1>
        <div class="para-text">
          Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races
<!--          <span class="sub-text"></span>-->
        </div>
      </div>
    </div>
    <div class="social-links">
      <div>
        <h3>Follow</h3>
      </div>
      <div>
        <i class="fa-brands fa-facebook-square"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </div>
  </div>
</template>


<style scoped>
.hero {
  width: 100vw;
  position: absolute;
  left: 0;
  top: 50px;
}
.social-links {

}
@media only screen and (max-width: 838px) {

  .image-container {
    width: 100%;
    height: 400px;
    /*position: absolute;*/
    background: url("../assets/hero-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    left: 0;
    overflow: hidden;
  }
  .text-container {
    background: #202020;
    width: 100vw;
    height: 170px;
    position: absolute;
  }
  .social-links > div {
  margin-left: 20px;
    font-size: 16px;
  }
  i {
    margin-top: 5px;
    padding: 15px;
    font-size: 25px;
  }
  .social-links {
    background: #fff;
    border-bottom: 1px solid #393939;
    height: 120px;
    width: 100vw;
    position: relative;
    top: 200px;
    z-index: -1;
    color: #393939;
    display: flex;
    justify-content: space-between;
  }
  .text-container:after {
    background: inherit;
    bottom: 0;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-1.5deg);
    transform-origin: 100%;
    z-index: -1;
  }
  .para-text {
    text-transform: none;
   ;
    font-size: 14px;
    line-height: 18px;
    font-family: Roboto, "Trebuchet MS", Helvetica, Arial, sans-serif;;
  }
  .bigger-text {
    font-family:"RobotoCondensed Bold", "Trebuchet MS", Helvetica, Arial, sans-serif; ;
    font-weight: 500;
    font-size: 26px;
    line-height: 26px;
  }
  h1 {
    text-transform: uppercase;
    font-size: 14px;
    position: relative;
    left: 40px;
    width: fit-content;
  }
  .text-body {
    position: relative;
    top: 50px;
  }
  .small-title {
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    font-family:"RobotoCondensed Bold", "Trebuchet MS", Helvetica, Arial, sans-serif; ;
  }
}
</style>