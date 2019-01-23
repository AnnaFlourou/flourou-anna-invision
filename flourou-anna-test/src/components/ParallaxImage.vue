<template>
  <div id="parallax_image">
<img class="img_desktop d-none d-lg-block" src="@/assets/desktop_parallax_background.jpg">
<div class="img_mobile d-block d-lg-none">
<img src="@/assets/mobile_parallax_background.png">
</div>
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
.img_desktop {
  max-height: 65vh;
  width: 100%;
  padding: 0;
  margin: 0;
}
.img_mobile img{
  width: 100%;
  padding-bottom: 10rem;
}

</style>
