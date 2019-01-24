<template>
  <div id="home">
    <img class="desktop_hero_bckd d-none d-lg-block" src="@/assets/desktop_hero_background.jpg">
    <img class="mobile_hero_bckd d-block d-lg-none" src="@/assets/mobile_hero_background.jpg">
    <Navbar></Navbar>
    <div class="home_elements_desktop d-none d-lg-block">
      <h1 class="h_1">Mountains worthy of Tolkien's stories</h1>
      <h2 class="h_2">Discover Arbizon. </h2>
      <p class="home_text">Interested? Let’s go!</p>
    </div>
    <div class="home_elements_mobile d-block d-lg-none">
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
<style scoped>
#home {
  height: 93vh;
  width: 100%;
}
.desktop_hero_bckd {
  position: absolute;
  width: 100%;
  height: 885px;
}
.home_elements_desktop {
  position: relative;
	color: #FFFFFF;
  top: 176px;
  left: 233px;
  width: 50vw;
}
.h_1 {
  font-family: "SF Pro Display Light";
  height: 20px;
	width: 279px;
	font-size: 17px;
	font-weight: 300;
	letter-spacing: 0.43px;
}
.h_2 {
	font-family: "SF Pro Display Black";
  height: 188px;
	width: 413px;
  margin-top: 3rem;
	font-size: 98px;
	font-weight: 900;
	letter-spacing: 0.43px;
	line-height: 94px;
}
.home_text {
	font-family: "SF Pro Display Bold";
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
/* version mobile */
.mobile_hero_bckd {
  position: absolute;
  width: 100%;
  height: 100vh;
}
.home_elements_mobile {
    position: relative;
    color: #FFFFFF;
    top: 39rem;
    left: 0;
    padding-left: 9rem;
    width: 100%;
  }
  .home_elements_mobile .h_1 {
  font-family: "SF Pro Display Light";
  height: 103px;
	width: 100%;
	font-size: 50px;
	font-weight: 300;
	letter-spacing: 0.43px;
}
.home_elements_mobile .h_2 {
	font-family: "SF Pro Display Black";
  height: 240px;
	width: 413px;
	font-size: 80pt;
	font-weight: 900;
	letter-spacing: 0.43px;
}
.home_elements_mobile .home_text {
	font-family: "SF Pro Display Bold";
	height: 75px;
	width: 550px;
  margin-top: 3rem;
	font-size: 58px;
	font-weight: bold;
	letter-spacing: 0.61px;
  border-bottom: 2px solid #FC4748;
  margin-bottom: 2rem;
}
</style>
