<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @font-face {
    font-family: "SF Pro Display Black";
    src: url('./assets/fonts/SF-Pro-Display-Black.ttf') format("truetype");
    font-style: normal;
  }
  @font-face {
    font-family: "SF Pro Display Bold";
    src: url('./assets/fonts/SF-Pro-Display-Bold.ttf') format("truetype");
    font-style: normal;
  }
  @font-face {
    font-family: "SF Pro Display Heavy";
    src: url('./assets/fonts/SF-Pro-Display-Heavy.ttf') format("truetype");
    font-style: normal;
  }
  @font-face {
    font-family: "SF Pro Display Light";
    src: url('./assets/fonts/SF-Pro-Display-Light.ttf') format("truetype");
    font-style: normal;
  }
  @font-face {
    font-family: "SF Pro Display Medium";
    src: url('./assets/fonts/SF-Pro-Display-Medium.ttf') format("truetype");
    font-style: normal;
  }
  @font-face {
    font-family: "SF Pro Display Regular";
    src: url('./assets/fonts/SF-Pro-Text-Regular.ttf') format("truetype");
    font-style: normal;
  }
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center; */
}
</style>
