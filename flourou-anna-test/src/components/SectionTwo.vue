<template>
  <div id="section_2" class="container">
    <div class="section2_all row">
      <div class="section2_img col-5">
        <img class="section2_img" src="@/assets/mobile_section2_image.jpg">
      </div>
      <div class="section2_text col-7">
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
	font-family: "SF Pro Display";
}
.section2_img{
	height: 642.22px;
	width: 428px;
}
.section2_text {
margin-top: 4.5rem;
}
.section2_p1 {
  height: 21px;
	width: 310px;
	color: #FC4748;
	font-size: 18px;
	font-weight: 300;
	letter-spacing: 0.45px;
}
.section2_h3 {
	height: 110px;
	width: 613px;
	color: #000000;
	font-family: "SF Pro Display";
	font-size: 46px;
	font-weight: 900;
	letter-spacing: 1.16px;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.section2_p2 {
	height: 221px;
	width: 613px;
	color: #6F7072;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 0.45px;
}
.section2_link {
/* height: 29px; */
	width: 181px;
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
</style>
