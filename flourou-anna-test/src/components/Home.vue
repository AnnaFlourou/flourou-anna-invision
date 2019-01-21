<template>
  <div class="home">
    <img class="desktop_hero_bckd" src="@/assets/desktop_hero_background.jpg">
    <Navbar></Navbar>
    <h1>Mountains worthy of Tolkien's stories</h1>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  components: {
    Navbar
  },
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.desktop_hero_bckd {
position: absolute;
height : 100vh;
width: 100vw;
}
h1 {
	color: #FFFFFF;
}
</style>
