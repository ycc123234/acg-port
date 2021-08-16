<template>
  <div id="app">
    <loading></loading>
    <router-view></router-view>
  </div>
</template>
<script>
import Loading from '@/components/loading.vue'
export default {
  components:{'loading':Loading},
  created() {
    // setTimeout(() => {
    //   window.L2Dwidget.init({
    //     pluginRootPath: "live2dw/", //资源root路径
    //     pluginJsPath: "lib/", //js相对root的路径
    //     pluginModelPath: "assets/", //模型相对root的路径
    //     tagMode: !1,
    //     debug: !1,
    //     model: {
    //       scale: 2,
    //       jsonPath: "live2dw/assets/asuna_33.model.json"//换老婆
    //     },
    //     display: {
    //       //大小位置什么的自己慢慢调就是了
    //       position: "right", //定位
    //       width: 130, //宽度
    //       height: 210, //高度
    //       hOffset: -40, //左右
    //       vOffset: 0, //上下
          
    //     },
    //     mobile: {
    //       show: false//是否盯着鼠标看
    //     },
    //     log: !1
    //   });
    // }, 1000);
  },
  mounted() {
    // this.aa();
  },
  methods: {}
};
</script>


<style lang='scss'  >
@import "@/lib/mySakura/index";
#app {
  
}


</style>
