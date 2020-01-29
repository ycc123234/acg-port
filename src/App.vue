<template>
  <div id="app">
    <div>
      <div id="bg-image"></div>
      <div class="bg-image-pattern"></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// import { L2Dwidget } from "./lib/live2dw/lib/L2Dwidget.min.js";
export default {
  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "live2dw/", //资源root路径
        pluginJsPath: "lib/", //js相对root的路径
        pluginModelPath: "assets/", //模型相对root的路径
        tagMode: !1,
        debug: !1,
        model: {
          scale: 2,
          jsonPath: "live2dw/assets/asuna_33.model.json"
        },
        display: {
          //大小位置什么的自己慢慢调就是了
          position: "right", //定位
          width: 130, //宽度
          height: 210, //高度
          hOffset: -40, //左右
          vOffset: 0 //上下
        },
        mobile: {
          show: !1
        },
        log: !1
      });
    }, 3000);
  },
  mounted() {
    // this.aa();
  },
  methods: {}
};
</script>


<style lang='scss'  >
@import "./lib/mySakura/sakura";
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
