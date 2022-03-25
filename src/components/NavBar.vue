<template>
  <div class="main-container">
    <div class="first-child">
      <div class="user-name">
        <p>David</p>
      </div>
      <div class="logo">
        <span>
          <img src="../assets/download.png" class="logo"/>
        </span>

      </div>

      <div class="search-bar">
        <div class="search-pic">
          <img src="../assets/icon-mu-shield.png" />
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

</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.main-container {
  font-size: 12px;
  background-color: #202020;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  width: 100%;
  height: 100px;
}
.first-child {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -10px;
}
.second-child {
  border-top: 1px solid #393939;
  position: relative;
  top: -10px;
  margin-bottom: 12px;
}
.user-name {
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: 	#393939;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: 	#393939;
  position: relative;
  left: 25px;
  margin-left: 150px;
  margin-top: 10px;
  padding: 10px;

}
.user-name >p {
  margin-left: 15px;
  margin-right: 15px;
}
.search-pic > img{
 margin-top: 30px;
  padding-left: 12px;
  position: relative;
top: -7px;
}
.logo {
  width: 90px;
  height : auto;
}
.logo {
  width: auto;
  height : 64px;
  position: relative;
  top: 5px;
  margin-top: -1px;
  left: 49px;
}
.search-bar {
  display: flex;
  margin-right: 150px;
  border-left: 1px solid  #393939;
  border-right: 1px solid  #393939;
}
.search-pic > img{
  width: auto;
  height : 50px;
}
.search-pic > img{
  width: 25px;
  height : auto;
}
.search-icon {
  color: white;
  padding: 7px;
  border-left: 1px solid #393939;
}
.search-icon > svg{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
}
.second-text {
  margin-top: -11px;
  font-size: 10px;
}
.search-text {
  margin: 9px;
  padding: 2px;

}

ul {
  list-style-type: none;
  display: flex;
  justify-content: center;

}
li {
  padding-left: 20px;
  padding-right: 20px;
}
</style>