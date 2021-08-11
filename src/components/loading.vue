<template>
  <div id="com_loading">
    <transition name="fade">
      <div id="loadingPanel" v-if="this.$store.state.loading">
        <div class="loading-item">
          <div></div>
          <div></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  
  data() {
    return {};
  },

  created() {},
  mounted() {},

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss' scoped>
#com_loading {
  #loadingPanel {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ffffffcc;
    z-index: 999999;
    .loading-item {
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: 200px;
      height: 200px;
      margin: -100px 0 0 -100px;
      top: 50%;
      left: 50%;
      // transform: translate(-50%,-50%);
      > div {
        align-self: center;
        border-radius: 20%;
        width: 30px;
        height: 10px;
        box-shadow: 0 0 3px 1px #2e845e;
        &:first-child {
          background: #41b883;
        }
        &:last-child {
          background: #41b883;
        }
      }
      transform-origin: 50% 50%;
      animation: 0.7s 0s cubic-bezier(0.62, 0.8, 0.38, 0.21) infinite loading;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
