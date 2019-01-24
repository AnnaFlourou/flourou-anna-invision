<template>
  <div id="section_2">
<!-- version desktop -->
    <div class="container d-none d-lg-block">
      <div class="row">
        <img class="section2_img col-6" src="@/assets/desktop_section2_image.jpg">
        <div class="section2_text col-6">
          <p class="section2_p1">The most beautiful view of the Pyrénées</p>
          <h3 class="section2_h3">A hike ending in crossing the raptor ridge.</h3>
          <div class="section2_p2">
            <p>The normal route to the Arbizon summit is on the south side, the Aulon Valley. The starting point is the barns of Lurgues, near the village of Aulon, about 1400 m above sea level.</p>
            <p>Another way of access exists: it takes the valley of the lake of Arou and passes within the Arbizon-Montfaucon circus to climb on the crest by the breach of Aurey.</p>
          </div>
        <p class="section2_link">
          <a href="#">Discover hikes !</a>
        </p>
        </div>
      </div>
    </div>
<!-- version mobile -->
    <div class="d-block d-lg-none">
      <img class="section2_img_mobile" src="@/assets/mobile_section2_image.jpg">
      <div class="section2_text_mobile">
        <p class="section2_p1">The most beautiful view of the Pyrénées</p>
        <h3 class="section2_h3">A hike ending in crossing the raptor ridge.</h3>
        <div class="section2_p2">
          <p>The normal route to the Arbizon summit is on the south side, the Aulon Valley. The starting point is the barns of Lurgues, near the village of Aulon, about 1400 m above sea level.</p>
          <p>Another way of access exists: it takes the valley of the lake of Arou and passes within the Arbizon-Montfaucon circus to climb on the crest by the breach of Aurey.</p>
        </div>
      <p class="section2_link">
        <a href="#">Discover hikes !</a>
      </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'sectionTwo',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#section_2 {
  margin-bottom: 5rem;
  margin-top: 5rem;
  overflow: hidden;
}
/* version desktop */
.section2_img{
  height: 100%;
  width: 100%;
}
.section2_text {
margin-top: 7.5rem;
}
.section2_p1 {
  font-family: "SF Pro Display Light";
  height: 41px;
	width: 310px;
	color: #FC4748;
	font-size: 18px;
	font-weight: 300;
	letter-spacing: 0.45px;
}
.section2_h3 {
	height: 130px;
	width: 613px;
	color: #000000;
	font-family: "SF Pro Display Black";
	font-size: 46px;
	font-weight: 900;
	letter-spacing: 1.16px;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.section2_p2 {
	font-family: "SF Pro Display Medium";
	height: 231px;
	width: 613px;
	color: #6F7072;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.45px;
}
.section2_link {
	width: 210px;
  border-bottom: 4px solid #FC4748;
  padding-bottom: 1rem;
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 0.61px;
  text-align: center;
}
.section2_link a{
  	color: #000000;
}
.section2_link a:hover{
  	text-decoration: none;
}
/* version mobile */
.section2_img_mobile {
  margin: 3rem;
  width: 85%;
  height: auto;
  padding-left: 1rem;
}
.section2_text_mobile {
  margin: 3rem 5rem;
  width: 100%;
}
.section2_text_mobile .section2_p1 {
  font-family: "SF Pro Display Light";
  height: 118px;
	width: 100%;
	color: #FC4748;
	font-size: 50px;
	font-weight: 300;
	letter-spacing: 0.45px;
}
.section2_text_mobile .section2_h3 {
	height: 381px;
	width: 100%;
	color: #000000;
	font-family: "SF Pro Display Black";
	font-size: 86px;
	font-weight: 900;
	letter-spacing: 1.16px;
}
.section2_text_mobile .section2_p2 {
	font-family: "SF Pro Display Medium";
	height: 100%;
	width: 86%;
	color: #6F7072;
	font-size: 55px;
	font-weight: 500;
	letter-spacing: 0.45px;
}
.section2_text_mobile .section2_link {
	width: 475px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-bottom: 4px solid #FC4748;
	font-size: 59px;
	font-weight: bold;
	letter-spacing: 0.61px;
  text-align: center;
}
.section2_text_mobile .section2_link a{
  color: #000000;
}
.section2_text_mobile .section2_link a:hover{
  text-decoration: none;
}
</style>
