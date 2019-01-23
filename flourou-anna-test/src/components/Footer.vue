<template>
  <div id="footer" class="container-fluid">
    <div class="row">
      <div class="col-6">
        <img src="@/assets/logo_black.svg">
      </div>
      <div class="row footer_information">
        <div class="col-6 footer_block">
          <p><span>Sitemap</span></p>
          <p>Home</p>
          <p>Discover</p>
          <p>Hikes</p>
        </div>
        <div class="col-6 footer_block">
          <p><span>Contact</span></p>
          <p>123 rue bidon</p>
          <p>65000 Aulon</p>
          <p>contact@arbizon.fr</p>
          <p>+33 7 12 34 56 78</p>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
margin: 0 auto;
  padding: 6rem;
}
p span {
	height: 21px;
	width: 72px;
	color: #000000;
	font-family: "SF Pro Display";
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 0.45px;
	line-height: 21px;
}
p {
	height: 21px;
	width: 141px;
	color: #9D9D9D;
	font-family: "SF Pro Display";
	font-size: 18px;
	letter-spacing: 0.45px;
	line-height: 21px;
}
.footer_information {
  margin: 0 auto;
  padding: 4rem;
/* width: 50vw; */
}
.footer_block {
padding-right: 5rem;
}
</style>
