<template class="container-fluid">
  <div id="section_1" class="row">
<!-- texte version desktop -->
    <div class="section1_text col-6 d-none d-lg-block">
    <p class="paragraphe_1">The Adour of Payolle is born on its northern slope.</p>
    <h3 class="h_3">The most beautiful view
    of the Pyrénées.</h3>
    <div class="paragraphe_2">
      <p>The Arbizon (2,831 m) is the highest point of the Arbizon massif in the Hautes-Pyrénées. It is located east of the Néouvielle massif, between the Aure valley to the east, and the Campan valley to the north.</p>

        <p>From a geological point of view, the peak of the Arbizon lies at the contact between the granitic massif of Neouvielle (pluton) and the various shales and marls of the Carboniferous.</p>

        <p>Thus, it is located in the halo of metamorphism caused by the rise of magma within the continental lithosphere, during the various movements of orogenesis that the region has known. Its geological wealth is known to the greatest number: one can find there particular minerals, resulting from the partial recrystallization of the schistose country, such as garnets, axinite, vesuvianite, etc.</p>
    </div>
  </div>
<!-- image version desktop -->
<div class="col-6 d-none d-lg-block">
    <img class="img_section1_desktop" src="@/assets/desktop_section1_background.svg">
</div>
<div>
<!-- image version mobile -->
<div class="d-block d-lg-none col-12">
    <img class="img_section1_mobile" src="@/assets/mobile_section1_background.svg">
</div>
<!-- texte version mobile -->
  <div class="section1_text_mobile d-block d-lg-none">
    <p class="paragraphe_1">The Adour of Payolle is born on its northern slope.</p>
    <h3 class="h_3">The most beautiful view
    of the Pyrénées.</h3>
    <div class="paragraphe_2">
      <p>The Arbizon (2,831 m) is the highest point of the Arbizon massif in the Hautes-Pyrénées. It is located east of the Néouvielle massif, between the Aure valley to the east, and the Campan valley to the north.</p>

        <p>From a geological point of view, the peak of the Arbizon lies at the contact between the granitic massif of Neouvielle (pluton) and the various shales and marls of the Carboniferous.</p>

        <p>Thus, it is located in the halo of metamorphism caused by the rise of magma within the continental lithosphere, during the various movements of orogenesis that the region has known. Its geological wealth is known to the greatest number: one can find there particular minerals, resulting from the partial recrystallization of the schistose country, such as garnets, axinite, vesuvianite, etc.</p>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Section1',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#section_1 {
  width: 100%;
  overflow: hidden;
  margin: 0;
  height: auto;
}
.section1_text {
width: 1000px;
  padding-top: 10rem;
  padding-left: 25rem;
}
.paragraphe_1{
  font-family: "SF Pro Display Light";
  height: 21px;
	width: 391px;
	color: #FC4748;
	font-size: 18px;
	font-weight: 300;
	letter-spacing: 0.45px;
	line-height: 21px;
}
.h_3 {
	font-family: "SF Pro Display Black";
	height: 110px;
	width: 575px;
  margin-top: 3rem;
  margin-bottom: 3rem;
	color: #000000;
	font-size: 46px;
	font-weight: 900;
	letter-spacing: 1.16px;
	line-height: 55px;
}
.paragraphe_2 {
	height: 486px;
	width: 553px;
	color: #6F7072;
	font-family: "SF Pro Display Medium";
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.45px;
	line-height: 30px;
}
.img_section1_desktop {
  position: relative;
  left: 1rem;
  bottom: 1.5rem;
}

/* version mobile */
.img_section1_mobile{
width: 68vw;
height: 30vh;
margin-left: 20rem;
margin-top: 8rem;
}
.section1_text_mobile {
  padding-top: 6rem;
  padding-left: 5rem;
  padding-right: 6rem;
}
.section1_text_mobile .paragraphe_1{
  font-family: "SF Pro Display Light";
  height: 93px;
	width: 100%;
	color: #FC4748;
	font-size: 48px;
	font-weight: 300;
	letter-spacing: 0.45px;
	line-height: 48px;
}
.section1_text_mobile .h_3 {
	font-family: "SF Pro Display Black";
	height: 300px;
	width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
	color: #000000;
	font-size: 101px;
	font-weight: 900;
	letter-spacing: 1.16px;
	line-height: 92px;
}
.section1_text_mobile .paragraphe_2 {
	height: 100%;
	width: 100%;
	color: #6F7072;
	font-family: "SF Pro Display Light";
	font-size: 48px;
	font-weight: bold;
	letter-spacing: 0.45px;
	line-height: 85px;
  padding-bottom: 7rem;
}
</style>
