<template>
  <div>
    <Home></Home>
    <SectionOne></SectionOne>
    <ParallaxImage></ParallaxImage>
  </div>
</template>

<script>
import Home from "@/components/Home"
import SectionOne from "@/components/SectionOne"
import ParallaxImage from "@/components/ParallaxImage"
export default {
  components: {
    Home,
    SectionOne,
    ParallaxImage
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
