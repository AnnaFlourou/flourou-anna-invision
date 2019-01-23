<template>
  <div>
    <Home></Home>
    <SectionOne></SectionOne>
    <ParallaxImage></ParallaxImage>
    <SectionTwo></SectionTwo>
    <SectionThree></SectionThree>
  </div>
</template>

<script>
import Home from "@/components/Home"
import SectionOne from "@/components/SectionOne"
import ParallaxImage from "@/components/ParallaxImage"
import SectionTwo from "@/components/SectionTwo"
import SectionThree from "@/components/SectionThree"
export default {
  components: {
    Home,
    SectionOne,
    ParallaxImage,
    SectionTwo,
    SectionThree
  },
  name: 'MainPage',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
