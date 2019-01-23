<template>
  <div id="parallax_image">
<img src="@/assets/desktop_parallax_background.jpg">
  </div>
</template>

<script>
export default {
  name: 'parallaxImage',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
/* #parallax_image {
  height: 960px;
  width: auto;
} */
img {
  max-height: 65vh;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
