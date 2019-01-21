<template>
  <div class="container-fluid">
    <nav class="navbar row">
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
.navbar {
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
	/* font-family: "SF Pro Display"; */
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
h1{
	color: #FFFFFF;
}
</style>
