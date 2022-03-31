<template>
<div class="comic-body">
<!--  <button @click="getData">Get comic book data</button>-->
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ComicComponent",

  setup() {
    const getData = async () => {
      try {
        const data = await axios.get('http://marvel.com/v1/public/comics?apikey=15a45395c5c1be1781feb30173751c55')
        console.log(data)
      } catch(e) {
        console.log(e)
      }
    }

    return {
      getData
    }
  }
}


</script>

<style scoped>


</style>