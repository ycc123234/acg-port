<template>
  <div id="bgimg">
    <div id="bg-image"></div>
    <div class="bg-image-pattern"></div>
  </div>
</template>

<script>
export default {
  name: "bgimg",
  data() {
    return {};
  },

  created() {
    console.log("b");
  },
  mounted() {},

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss' scoped>
#bgimg {
  #bg-image  {
    // background: url("https://random.52ecy.cn/randbg.php") no-repeat center;
    // background: url("https://i0.hdslb.com/bfs/archive/640d7cea873a157e29b0795e6319fccb5280f93c.jpg@1920w_1080h.webp") no-repeat center;
    background: url(~@/assets/img/xxxx.jpg) no-repeat center;
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
    background: url("~@/assets/img/bg-fixed.png") repeat;
  }
}
</style>
