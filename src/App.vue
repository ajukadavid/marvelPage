<template>
  <NavBar />
  <router-view/>
  <FooterComponent />
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterComponent from "@/components/FooterComponent";
export default  {
  components: {
    FooterComponent,
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  text-transform: uppercase;
}

</style>
