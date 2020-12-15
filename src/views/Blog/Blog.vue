<template >
  <div class="app-blog">
    <div>
      <bg-img />
      <!-- 参考自:       https://www.reddit.com/r/roguelikedev/      -->

      <div id="myBlog">
        <!-- //nav -->
        <div id="o-head">
          <div class="icon">
            <img src="https://www.wikimoe.com/content/uploadfile/tpl_options//logo.png" />
          </div>
          <div class="category">
            <ul class="bar">
              <li class="item">
                <div>首页</div>
              </li>
              <li class="item">
                <div>首页1</div>
              </li>
              <li class="item">
                <div>首页11</div>
              </li>
              <li class="item">
                <div>首页111</div>
              </li>
            </ul>
          </div>
          <div class="information">
            <div class="sign">
              <div class="signin"></div>
              <div class="signup"></div>
            </div>
            <div class="search" @focusin="getFocus" @focusout="lostFocus">
              <input class="input-btn" type="button" />
              <input class="input-textarea" placeholder="整点活呗!!" />
            </div>
          </div>
        </div>
        <!-- //body -->

        <div id="o-body">
          <!-- //article -->
          <div class="item news">
            <div>
              <div class="news-title">
                <div>最新内容</div>
                <div class="more">更多+</div>
              </div>
              <div class="news-content">
                <div class="item">
                  <div class="item-category">通知</div>
                  <div class="item-title">程序正在开发中哒！！思密哒！！！</div>
                  <div class="item-createtime">20.08.06</div>
                </div>
                <div class="item">
                  <div class="item-category">通知</div>
                  <div class="item-title">程序正在开发中哒！！思密哒！！！</div>
                  <div class="item-createtime">20.08.06</div>
                </div>
                <div class="item">
                  <div class="item-category">通知</div>
                  <div class="item-title">程序正在开发中哒！！思密哒！！！</div>
                  <div class="item-createtime">20.08.06</div>
                </div>
                <div class="item">
                  <div class="item-category">通知</div>
                  <div class="item-title">程序正在开发中哒！！思密哒！！！</div>
                  <div class="item-createtime">20.08.06</div>
                </div>
                <div class="item">
                  <div class="item-category">通知</div>
                  <div class="item-title">程序正在开发中哒！！思密哒！！！</div>
                  <div class="item-createtime">20.08.06</div>
                </div>
                <div class="item">
                  <div class="item-category">通知</div>
                  <div class="item-title">程序正在开发中哒！！思密哒！！！</div>
                  <div class="item-createtime">20.08.06</div>
                </div>
                <div class="item">
                  <div class="item-category">通知</div>
                  <div class="item-title">程序正在开发中哒！！思密哒！！！</div>
                  <div class="item-createtime">20.08.06</div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- //aside -->
          <div class="item myself">
            <div>
              <div class="picture">
                <img src="~@/assets/img/head-pic.jpg" />
              </div>
              <div class="info">
                <div>
                  <span>昵称：</span>
                  <span>龙傲天</span>
                </div>
                <div>
                  <span>年龄：</span>
                  <span>23</span>
                </div>
                <div>
                  <span>阶位：</span>
                  <span>博主</span>
                </div>
                <div>
                  <span>喜好：</span>
                  <span>跑团、编曲</span>
                </div>
              </div>
              <div class="motto">
                <div>
                  <span>简介：</span>
                  <span>人类的赞歌就是勇气的赞歌･ᴗ･</span>
                </div>
              </div>
            </div>
          </div>
          <div class="item item3">
            <div>投食器</div>
          </div>
          <div class="item item4">
            <div>留言板</div>
          </div>
          <div class="item item5">
            <div>功能板块</div>
          </div>
          <div class="item item6">
            <div>
              <div>备案号：浙ICP备18048619号</div>
              <div>qq：1074637022</div>
            </div>
          </div>
          <!--          
          <div class="item item7"></div>
          <div class="item item8"></div>
          <div class="item item9"></div>
          -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bgimg from "../../components/BgImg.vue";
export default {
  components: {
    "bg-img": bgimg
  },
  data() {
    return {};
  },
  created() {},
  mounted() {console.log('123456')},
  methods: {
    getFocus: function(elem) {
      elem.currentTarget.getElementsByClassName(
        "input-btn"
      )[0].style.backgroundPositionY = "-40px";
      elem.currentTarget.style.backgroundColor = "#ffffff";
      elem.currentTarget.getElementsByClassName(
        "input-textarea"
      )[0].style.color = "#EA2B73";
    },
    lostFocus: function(elem) {
      elem.currentTarget.getElementsByClassName(
        "input-btn"
      )[0].style.backgroundPositionY = "0px";
      elem.currentTarget.style.backgroundColor = "#363c41";
      elem.currentTarget.getElementsByClassName(
        "input-textarea"
      )[0].style.color = "#39c5bb";
    }
  }
};
</script>

<style lang="scss" scoped >
@import "./Blog.scss";
</style>