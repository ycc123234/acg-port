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

  created() {},
  mounted() {
    let el=document.getElementById('bg-image');
  },

  methods: {},
  computed: {},
  watch: {
    "$store.state.mode": function (newVal, oldVal) {
      //在其中写入函数体用于切换bgimg的的小图片有无
      let target = bgimg.getElementsByClassName("bg-image-pattern")[0];
      if (newVal == "pic") {
        target.style.backgroundImage = "url('')";
      } else {
        target.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCRUU1NjU3NTIzMTExRTFCQzZFQzc4QkVENDRGMjE0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCRUU1NjU4NTIzMTExRTFCQzZFQzc4QkVENDRGMjE0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0JFRTU2NTU1MjMxMTFFMUJDNkVDNzhCRUQ0NEYyMTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0JFRTU2NTY1MjMxMTFFMUJDNkVDNzhCRUQ0NEYyMTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz55ZXpVAAAAEUlEQVR42mJgQABj3AyAAAMACukAmi47wP0AAAAASUVORK5CYII=')";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss' scoped>
#bgimg {
  #bg-image {
    // background: url("https://random.52ecy.cn/randbg.php") no-repeat center;
    // background: url("https://i0.hdslb.com/bfs/archive/640d7cea873a157e29b0795e6319fccb5280f93c.jpg@1920w_1080h.webp") no-repeat center;
    //明日方舟
    background-color: cadetblue;
    background: url("https://api.2heng.xin/cover/") no-repeat center;
    // background: url(~@/assets/img/xxxx.jpg) no-repeat center;
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
  .bg-image-pattern-picmode {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -998;
  }
}
</style>
