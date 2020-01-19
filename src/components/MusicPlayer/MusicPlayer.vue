<template>
  <div id="musicPlayer" class="player">
    <div class="logo">
      <img />
    </div>
    <div class="control anime ani-play" @click="playClick" v-if="musicInfo.paused"></div>
    <div class="control anime ani-pause" @click="playClick" v-else></div>
    <div class="next anime ani-next" @click="skipSongClick"></div>
    <div class="time">{{musicInfo.currentTime | audioAtTime}}/{{musicInfo.duration | audioAtTime}}</div>
    <div class="progress">
      <div id="nowP" class="now"></div>
    </div>
    <div class="name"></div>
  </div>
</template>

<script>
import mu from "../../utils/musicUtil";
import {audioAtTime} from "../../utils/filters";
export default {
  name: "MusicPlayer",
  data() {
    return {
      songs: [],
      bgUrl: "",
      musicInfo: {
        paused: true,
        duration: 0,
        currentTime: 0,
        playCount: 0
      }
    };
  },
  filters: {
    //时间转换==>分秒==el:param=100s result=01:40
    audioAtTime
  },
  created() {
    console.log("音乐组件加载成功");
    this.getSongList();
  },
  mounted() {},
  methods: Object.assign({}, mu)
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss' scoped>
@import url("MusicPlayer.scss");
</style>
