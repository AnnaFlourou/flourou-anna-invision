<template>
  <div>
    <Home></Home>
    <SectionOne></SectionOne>
  </div>
</template>

<script>
import Home from "@/components/Home"
import SectionOne from "@/components/SectionOne"
export default {
  components: {
    Home,
    SectionOne
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
