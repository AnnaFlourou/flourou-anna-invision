<template>
  <div id="section_3" class="container-fluid">
    <div class="row">
      <div class="col-6 section3_block">
        <img class="section3_img" src="@/assets/desktop_section3_background1.jpg">
        <h3 class="section3_text">Vallée d’Aulon</h3>
      </div>
      <div class="col-6 section3_block">
        <img class="section3_img" src="@/assets/desktop_section3_background2.jpg">
        <h3 class="section3_text">Lac d’Arou</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sectionThree',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#section_3 {
	font-family: "SF Pro Display";
}
.section3_block {
  right: 1rem;
  height: 572px;
  width: 100%;
}
.section3_img {
  height: 572px;
  width: 105%;
}
.section3_text {
  position: relative;
  bottom: 8rem;
  left: 6rem;
	height: 64px;
	width: 394px;
	color: #FFFFFF;
	font-size: 54px;
	font-weight: 900;
	letter-spacing: 1.36px;
}
</style>
