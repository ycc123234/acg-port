<template style="overflow:hidden;">
  <div class="app-index aa">
    <div>
     <bg-img/>
    </div>
    <table id="skr-grid-template">
      <tr>
        <td colspan="8">
          <div class="box w-8 h-1">
            <div class="content cell-style">
              <div class="parent">
                <h1>ACG&nbsp;&nbsp;Port</h1>
              </div>
              <div class="name">在这里,你可以为所欲为‽</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <div class="box w-4 h-1">
            <div class="content cell-style">
              <div>
                <div>输入任意书名搜索</div>
                <div>
                  <input class="search" type="text" placeholder="请输入轻小说的名字" />
                  <span class="clear_go" @click="clearInput">x</span>
                </div>
              </div>
              <div class="name">开始</div>
            </div>
          </div>
        </td>
        <td>
          <div class="box w-1 h-1" @click="goBlog">
            <div class="content cell-style">
              <div>
                <i class="fa fa-paper-plane-o fa-4x" aria-hidden="true"></i>
              </div>
              <div class="name">我的博客</div>
            </div>
          </div>
        </td>
        <td rowspan="2">
          <div class="box w-1 h-2">
            <div class="content"></div>
          </div>
        </td>
        <td colspan="2" rowspan="2">
          <div class="box w-2 h-2">
            <div class="content"></div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="box w-1 h-1">
            <div class="content"></div>
          </div>
        </td>
        <td>
          <div class="box w-1 h-1">
            <div class="content"></div>
          </div>
        </td>
        <td rowspan="2">
          <div class="box w-1 h-2">
            <div class="content"></div>
          </div>
        </td>
        <td colspan="2">
          <div class="box w-2 h-1">
            <div class="content"></div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="box w-2 h-1">
            <div class="content">
              <div>
                <music-player></music-player>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div class="box w-1 h-1">
            <div class="content"></div>
          </div>
        </td>

        <td colspan="2">
          <div class="box w-2 h-1">
            <div class="content cell-style">
              <div id="motto" class="hitokoto" style="opacity:1;line-height: 20px;font-size: 14px;"></div>
            </div>
          </div>
        </td>
        <td>
          <div class="box w-1 h-1">
            <div class="content"></div>
          </div>
        </td>
        <td>
          <div class="box w-1 h-1">
            <div class="content"></div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import music from "../../components/MusicPlayer/MusicPlayer.vue";
import bgimg from "../../components/BgImg.vue";
export default {
  components: {
    "music-player": music,
    "bg-img":bgimg
  },
  data() {
    return {};
  },

  created() {},
  mounted() {
    this.getInfo();
  },

  methods: {
    goBlog() {
      // this.$router.push("blog");
       let routeUrl = this.$router.resolve({
          path: "/blog",
     });
     window.open(routeUrl .href, '_blank');
    },
    getInfo() {
      this.$api.animeMotto().then(result => {
        if (typeof str == "string") {
          result = eval("(" + result + ")");
        }
        motto.innerHTML = result.hitokoto + "<br/>--" + result.source;
        motto.style.opacity = 1;
        setTimeout(() => {
          motto.style.opacity = 0;
          setTimeout(() => {
            this.getInfo();
          }, 1000);
        }, 30000);
      });
    },
    clearInput() {
      let elem = document.getElementsByClassName("search")[0];
      elem.value = "";
    }
  },

  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


@import "./Home.scss";
</style>
