<template>
  <div id="app">
    <div>
      <div id="bg-image"></div>
      <div class="bg-image-pattern"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style >
@import "./lib/mySakura/sakura.scss";
#app {
}

#bg-image {
  background: url("https://random.52ecy.cn/randbg.php") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -9999;
  filter: brightness(80%);
}
.bg-image-pattern {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -998;
  background: url("./assets/img/bg-fixed.png") repeat;
}

body {
  padding: 0px;
  margin: 0px;
  /* overflow: hidden; */
}
</style>
