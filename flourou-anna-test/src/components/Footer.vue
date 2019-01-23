<template>
  <div id="endPart" class="container-fluid">
<div class="container-fluid d-none d-lg-block">
  <div class="row">
    <div class="col-6">
      <img class="img_desktop" src="@/assets/logo_black.svg">
    </div>
    <div class="row endPart_information_desktop">
      <div class="col-6 endPart_block_desktop">
        <p class="desktop_pBold"><span>Sitemap</span></p>
        <p class="desktop_p">Home</p>
        <p class="desktop_p">Discover</p>
        <p class="desktop_p">Hikes</p>
      </div>
      <div class="col-6 endPart_block_desktop">
        <p class="desktop_pBold"><span>Contact</span></p>
        <p class="desktop_p">123 rue bidon</p>
        <p class="desktop_p">65000 Aulon</p>
        <p class="desktop_p">contact@arbizon.fr</p>
        <p class="desktop_p">+33 7 12 34 56 78</p>
      </div>
    </div>
</div>
</div>
<div class="d-block d-lg-none row">
  <div class="col-6">
    <img class="img_mobile" src="@/assets/logo_black.svg">
  </div>
  <div class="endPart_information_mobile">
    <div class="endPart_block_mobile">
      <p class="mobile_p"><span>Sitemap</span></p>
      <p class="mobile_p">Home</p>
      <p class="mobile_p">Discover</p>
      <p class="mobile_p">Hikes</p>
    </div>
    <div class="endPart_block_mobile">
      <p class="mobile_p"><span>Contact</span></p>
      <p class="mobile_p">123 rue bidon</p>
      <p class="mobile_p">65000 Aulon</p>
      <p class="mobile_p">contact@arbizon.fr</p>
      <p class="mobile_p">+33 7 12 34 56 78</p>
    </div>
  </div>
</div>
<div>

</div>
  </div>
</template>

<script>
export default {
  name: 'endPart',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* version desktop */
.img_desktop {
  margin: 0 auto;
  padding: 6rem;
}
.desktop_pBold span {
	height: 21px;
	width: 72px;
	color: #000000;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 0.45px;
	line-height: 21px;
}
.desktop_p {
	height: 21px;
	width: 141px;
	color: #9D9D9D;
	font-size: 18px;
	letter-spacing: 0.45px;
	line-height: 21px;
}
.endPart_information_desktop {
	font-family: "SF Pro Display Light";
  margin: 0 auto;
  padding: 4rem;
}
.endPart_block_desktop {
padding-right: 5rem;
}

/* version mobile */
.img_mobile {
 width: 100%;
 height: 89px;
 margin-left: 6rem;
}

.endPart_information_mobile {
  /* margin-left: 6rem;
  margin-top: 2rem; */
  font-family: "SF Pro Display Light";
  margin: 0 auto;
  padding: 4rem;
}
.mobile_p span {
font-weight: bold;
color: #000;
padding-bottom: 3rem;
}
.mobile_p {
	height: 100%;
	width: 100%;
	color: #9D9D9D;
	font-size: 57px;
	letter-spacing: 0.45px;
	line-height: 84px;
}

</style>
