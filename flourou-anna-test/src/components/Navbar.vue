<template>
  <div class="container-fluid">
    <!-- version desktop -->
    <nav class="navbar navbar_desktop d-none d-lg-block row">
      <img class="logo-white" src="@/assets/logo_white.svg">
        <ul class="row nav_items">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Discover</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hikes</a>
            </li>
        </ul>
    </nav>

    <!-- version mobile -->
    <nav class="navbar navbar_mobile d-block d-lg-none row">
      <img class="logo_mobile_white col-6" src="@/assets/logo_white.svg">
      <img class="icon_menu" src="@/assets/icon_menu.svg">
    </nav>

  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar_desktop  {
  height: 33px;
  width: auto;
}
.logo-white {
  margin-top: 6.8rem;
  margin-left: 3rem;
	height: 32px;
	width: 163px;
}
li, a {
  text-decoration: none;
  list-style: none;
	color: #FFFFFF;
  font-weight: bold;
}
.nav_items {
  margin-top: 6.8rem;
  margin-right: 2rem;
	height: 35px;
  width: auto;
	font-family: "SF Pro Display Bold";
	font-size: 17px;
	font-weight: bold;
	letter-spacing: 0.4px;
}
.nav-item {
  margin-right: 2.2rem;
}
.active {
  border-bottom: 1px solid #FFFFFF;
}

/* version mobile */
.navbar_mobile {
  /* height: 33px; */
  width: auto;
}
.logo_mobile_white {
margin-top: 3rem;
margin-left: 3rem;
}
.icon_menu {
width: 6rem;
height: 6rem;
margin-top: 3rem;
margin-left: 15rem;
}
</style>
