<template>
<div>
  <MqResponsive target="lg+">
    <div class="lg-container">
      <div class="first-child">
        <div class="user-name">
          <p>David</p>
        </div>
        <div class="logo">
        <span>
          <img alt="marvel Logo Image" src="../assets/download.png" class="logo"/>
        </span>

        </div>

        <div class="search-bar">
          <div class="search-pic">
            <img  alt="marvel shield" src="../assets/icon-mu-shield.png" />
          </div>
          <div class="search-text">
            <p class="main">MARVEL UNILIMITED</p>
            <p class="second-text">SUBSCRIBE</p>
          </div>
          <div class="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
                 preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
                 fill="fff" stroke="none"  style="fill:#fff">
                <path d="M22 137 c-12 -13 -22 -31 -22 -41 0 -48 53 -86 91 -65 16 8 23 6 39
-13 10 -13 22 -19 27 -15 4 5 -2 17 -15 27 -19 16 -21 23 -13 39 21 39 -17 91
-67 91 -10 0 -28 -10 -40 -23z m83 -21 c19 -29 8 -61 -26 -71 -44 -14 -81 61
-41 84 28 17 51 12 67 -13z"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="second-child">
        <ul>
          <li>Videos</li>
          <li>Characters</li>
          <li>Comics</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>Games</li>
          <li>News</li>
          <li>More</li>
        </ul>
      </div>
    </div>
  </MqResponsive>
  <MqResponsive target="md-">
    <div class="md-container">
      <div class="md-first-child">
        <div class="slider">
          <Slide>

            <div class="nav-item">
                <a href="#">
                    <div class="stuff">
                      <span>Home</span>
                      <span class="arrow"><i class="fa-solid fa-chevron-right"></i> </span>
                    </div>
                </a>
            </div>

            <div class="nav-item">
              <a href="#">
                <div class="stuff">
                  <span>characters</span>
                  <span class="arrow"><i class="fa-solid fa-chevron-right"></i> </span>
                </div>
              </a>
            </div>

            <div class="nav-item">
              <a href="#">
                <div class="stuff">
                  <span>comics</span>
                  <span class="arrow"><i class="fa-solid fa-chevron-right"></i> </span>
                </div>
              </a>
            </div>

            <div class="nav-item">
              <a href="#">
                <div class="stuff">
                  <span>movies</span>
                  <span class="arrow"><i class="fa-solid fa-chevron-right"></i> </span>
                </div>
              </a>
            </div>

            <div class="nav-item">
              <a href="#">
                <div class="stuff">
                  <span>tv shows</span>
                  <span class="arrow"><i class="fa-solid fa-chevron-right"></i> </span>
                </div>
              </a>
            </div>

            <div class="nav-item">
              <a href="#">
                <div class="stuff">
                  <span>games</span>
                  <span class="arrow"><i class="fa-solid fa-chevron-right"></i> </span>
                </div>
              </a>
            </div>

            <div class="nav-item">
              <a href="#">
                <div class="stuff">
                  <span>news</span>
                  <span class="arrow"><i class="fa-solid fa-chevron-right"></i> </span>
                </div>
              </a>
            </div>

            <div class="nav-item">
              <a href="#">
                <div class="stuff">
                  <span>Culture & Lifestyle</span>
                </div>
              </a>
            </div>

            <div class="nav-item">
              <a href="#">
                <div class="stuff">
                  <span>Books</span>
                </div>
              </a>
            </div>

            <div class="nav-item">
              <a href="#">
                <div class="stuff">
                  <span>podcast</span>
                </div>
              </a>
            </div>


            <div class="nav-item">
              <a href="#">
                <div class="stuff-last">
                  <span>shop</span>
                </div>
              </a>
            </div>

            <div class="nav-footer">
                <div class="nav-stuff">
                  <h3>Marvel Insider</h3>
                  <div class="nav-name">
                    <span class="nav-item">david</span>
                    <span class="arrow"><i class="fa-solid fa-chevron-right"></i> </span>
                  </div>
                 </div>
            </div>
          </Slide>
        </div>
        <div class="md-logo">
        <span>
          <img src="../assets/download.png" class="md-logo"/>
        </span>
        </div>
        <div class="md-search-bar">
          <div class="md-search-icon">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
                 preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
                 fill="fff" stroke="none"  style="fill:#fff">
                <path d="M22 137 c-12 -13 -22 -31 -22 -41 0 -48 53 -86 91 -65 16 8 23 6 39
-13 10 -13 22 -19 27 -15 4 5 -2 17 -15 27 -19 16 -21 23 -13 39 21 39 -17 91
-67 91 -10 0 -28 -10 -40 -23z m83 -21 c19 -29 8 -61 -26 -71 -44 -14 -81 61
-41 84 28 17 51 12 67 -13z"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </MqResponsive>
</div>

</template>

<script>
import { MqResponsive } from "vue3-mq";
import { Slide } from 'vue3-burger-menu'
export default {
  components: {
    MqResponsive,
    Slide
  },
  name: "NavBar"
}
</script>

<style>
</style>