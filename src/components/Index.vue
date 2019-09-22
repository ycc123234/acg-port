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
              <div>在这里,你可以为所欲为</div>
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
                <div class="icon iconfont icon-pcclient" style="    margin-top: 22%;
    display: block;
    font-size: 60px;
"></div>
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
                  <div class="control iconfont icon-play" @click="play"></div>
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
<script src="../../lib/animeMusic/anime-music.js" ></script>

<script>
import { animeMusic, secondToDate } from "../../lib/animeMusic/anime-music.js";
export default {
  data() {
    return {
      bgUrl: ""
    };
  },
  created() {
    
  },
  mounted() {},
  methods: {
    play() {
      let url='http://v2.api.dmzj.com/article/recommend/header.json';
      this.axios.get(url).then(function(result){
        console.log(result)
      })
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../lib/animeMusic/anime_music_icon.css";
@import "../../lib/animeMusic/demo.css";
@import "../../assets/css/ycc_port.css";



.app-index {
  margin-left: 60px;
  margin-top: 160px;
  color: rgb(230, 230, 230);
}
.box {
  border: 4px solid rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.4) inset;
  -moz-box-shadow: 0px 0px 0px 1px rgba(20, 15, 15, 0.4) inset;
  overflow: hidden;
}
.cell-style{
   font-family: pixel;
  font-weight: bold;
}
.cell-style > div:first-child {
  display: table-cell;
  vertical-align: middle;
}
.cell-style > div:last-child {
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 6px;
}
.box .content {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  text-align: center;
  display: table;
  height: 100%;
  position: relative;
}


.box:hover {
  border: 4px solid black;
}
.search {
  background-color: rgba(255, 255, 255, 0);
  height: 10%;
  margin-top: 4%;
  width: 70%;
  font-size: 1em;
  color: #fff;
  min-height: 20px;
  padding: 5px;
  cursor: text;
  border: 1px rgba(255, 255, 255, 0.5) solid;
}
.clear_go {
  margin-left: -20px;
  color: #8b8b8b;
  cursor: pointer;
}

</style>
