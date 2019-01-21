<template>
  <div class="home">
    <img class="desktop_hero_bckd" src="@/assets/desktop_hero_background.jpg">
    <Navbar></Navbar>
    <div class="home_elements">
      <h1 class="h_1">Mountains worthy of Tolkien's stories</h1>
      <h2 class="h_2">Discover Arbizon. </h2>
      <p class="home_text">Interested? Let’s go!</p>
    </div>
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
.home_elements {
  position: relative;
	color: #FFFFFF;
	font-family: "SF Pro Display";
  top: 176px;
  left: 233px;
  width: 50vw;
}
.h_1 {
  height: 20px;
	width: 279px;
	font-size: 17px;
	font-weight: 300;
	letter-spacing: 0.43px;
}
.h_2 {
  height: 188px;
	width: 413px;
  margin-top: 3rem;
	font-size: 98px;
	font-weight: 900;
	letter-spacing: 0.43px;
	line-height: 94px;
}
.home_text {
	height: 47px;
	width: 235px;
  margin-top: 3rem;
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 0.61px;
	line-height: 29px;
  border-bottom: 2px solid #FC4748;
  margin-bottom: 1rem;
}
</style>
