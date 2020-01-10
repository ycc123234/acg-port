<template style="overflow:hidden;">
  <div class="app-index">
    <table width="1320px" height="660px;">
      <tr>
        <td colspan="8">
          <div class="box w-8 h-1">
            <div class="content cell-style">
              <div class="parent">
                <h1>ACG&nbsp;&nbsp;Port</h1>
              </div>
              <div>在这里,你可以为所欲为‽</div>
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
                  <span class="clear_go">x</span>
                </div>
              </div>
              <div class="name">开始</div>
            </div>
          </div>
        </td>
        <td>
          <div class="box w-1 h-1">
            <div class="content cell-style">
              <div>
                <div class="icon fas icon-pcclient" style="display: block;font-size: 46px;"></div>
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
                <div class="player">
                  <div class="logo"></div>
                  <div class="control iconfont icon-pause" @click="play" v-if="audio.paused"></div>
                  <div class="control iconfont icon-play" @click="play" v-else></div>
                  <div class="next iconfont icon-next"></div>
                  <div class="time">00:00/00:00</div>
                  <div class="progress">
                    <div class="now"></div>
                  </div>
                  <div class="name"></div>
                </div>
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
            <div class="content"></div>
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
// import { animeMusic, secondToDate } from "../../lib/animeMusic/anime-music.js";
export default {
  data() {
    return {
      bgUrl: "",
      audio:{
        paused:false
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    createAudio() {
      // let url='http://v2.api.dmzj.com/article/recommend/header.json';
      let url =
        "https://searl-32-1258067737.cos.ap-shanghai.myqcloud.com/musicInfo/url/Really%20Slow%20Motion%20-%20Suns%20And%20Stars.mp3";
      let audio = document.createElement("AUDIO");
      audio.src = url;
      this.myAudio = audio;
      this.createAudio = function() {};
    },
    play() {
      this.createAudio();
      let myAudio = this.myAudio;

      if (myAudio.paused) {
        myAudio.play();
        this.audio.paused=true;
      } else {
        myAudio.pause();
        this.audio.paused=false;
      }

      this.myAudio = myAudio;
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url("./Home.scss");
</style>
