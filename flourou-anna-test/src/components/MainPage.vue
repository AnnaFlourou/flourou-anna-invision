<template>
  <div>
    <Home></Home>
    <SectionOne></SectionOne>
    <ParallaxImage></ParallaxImage>
    <SectionTwo></SectionTwo>
  </div>
</template>

<script>
import Home from "@/components/Home"
import SectionOne from "@/components/SectionOne"
import ParallaxImage from "@/components/ParallaxImage"
import SectionTwo from "@/components/SectionTwo"
export default {
  components: {
    Home,
    SectionOne,
    ParallaxImage,
    SectionTwo
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
