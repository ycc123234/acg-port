<template >
  <div id="app-noticecontent">
    <top />
    <div id="main" class="body">
      <div class="head-title">
        <img
          src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
          data-src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
          class="title-bg lazyload"
          onerror="imgError(this,3)"
        />
        <div class="title-msg title-white">
          <div>
            <div class="title-text">基于 SCSS mixin 的 flex gap polyfill</div>
            <div class="title-info">
              <!-- 圆形头像 -->
              <div class="title-face">
                <img
                  src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
                  alt=""
                />
              </div>
              <div class="dot">·</div>
              <!-- 作者名字 -->
              <div class="title-artical">George</div>
              <div class="dot">·</div>

              <!-- 发布日期 -->
              <div class="title-date">{{ 1628649734129 | dateFilter }}</div>
              <div class="dot">·</div>

              <!-- 阅读次数 -->
              <div class="title-visit">866次阅读</div>
            </div>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="content">重要通知：2021年8月11日，本站正式成立！</div>
        <div class="tags">
          <i class="fa fa-tag" aria-hidden="true"></i>
          <div class="tag">无</div>
          <div class="tag">无</div>
        </div>
        <div id="slide2" class="slide">
          <div class="slide-ctrl">
            <div
              class="ctrl-left"
              @click="handleClickSlideDirectionBtn('left')"
              style=""
            >
              <i class="fa fa-arrow-left fa-2x" style="" aria-hidden="true"></i>
            </div>
            <div
              class="ctrl-right"
              @click="handleClickSlideDirectionBtn('right')"
              style=""
            >
              <i
                class="fa fa-arrow-right fa-2x"
                style=""
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div class="slide-view">
            <div class="slide-list">
              <div class="slide-item">
                <a>
                  <div class="slide-item-bg">
                    <img
                      src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
                    />
                  </div>
                  <div class="slide-item-info title-white">推荐阅读1</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="comments">
          <div class="head">
            <span style="font-size: 18px">Comments</span>
            <span class="dot">|</span>
            <span style="font-size: 14px"><span>17</span>条评论</span>
          </div>
          <div class="list">
            <div class="item">
              <div class="comment">
                <div class="title">
                  <div class="reply-btn">Reply</div>
                  <div class="user-pic">
                    <img
                      src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
                      alt=""
                    />
                  </div>
                  <div class="user-info">
                    <div class="nickname">Kvein</div>
                    <div class="info">
                      <span>发布于 <span>1天前</span> </span>
                      <span
                        >(
                        <span
                          ><i class="fa fa-chrome" aria-hidden="true"></i
                        ></span>
                        <span> Google Chrome 92.0.4515.131</span>
                        <span
                          ><i
                            class="fa fa-windows"
                            aria-hidden="true"
                          ></i></span
                        ><span>Windows 10</span> )</span
                      >
                      <span>来自：<span>黑龙江省大庆市 电信</span></span>
                    </div>
                  </div>
                </div>
                <div class="content">
                  我是多无聊才会没事上这个网站摸摸这个小人儿。（界面看上去太舒服了，虽然什么也看不懂）已经忘了怎么阴差阳错的发现这个网站了。
                </div>
              </div>
              <div class="reply-list">
                <div class="reply-item">
                  <div class="comment">
                    <div class="title">
                      <div class="reply-btn">Reply</div>
                      <div class="user-pic">
                        <img
                          src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
                          alt=""
                        />
                      </div>
                      <div class="user-info">
                        <div class="nickname">Kvein</div>
                        <div class="info">
                          <span>发布于 <span>1天前</span> </span>
                          <span
                            >(
                            <span
                              ><i class="fa fa-chrome" aria-hidden="true"></i
                            ></span>
                            <span> Google Chrome 92.0.4515.131</span>
                            <span
                              ><i
                                class="fa fa-windows"
                                aria-hidden="true"
                              ></i></span
                            ><span>Windows 10</span> )</span
                          >
                          <span>来自：<span>黑龙江省大庆市 电信</span></span>
                        </div>
                      </div>
                    </div>
                    <div class="content">
                      我是多无聊才会没事上这个网站摸摸这个小人儿。（界面看上去太舒服了，虽然什么也看不懂）已经忘了怎么阴差阳错的发现这个网站了。
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="comment">
                <div class="title">
                  <div class="reply-btn">Reply</div>
                  <div class="user-pic">
                    <img
                      src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
                      alt=""
                    />
                  </div>
                  <div class="user-info">
                    <div class="nickname">Kvein</div>
                    <div class="info">
                      <span>发布于 <span>1天前</span> </span>
                      <span
                        >(
                        <span
                          ><i class="fa fa-chrome" aria-hidden="true"></i
                        ></span>
                        <span> Google Chrome 92.0.4515.131</span>
                        <span
                          ><i
                            class="fa fa-windows"
                            aria-hidden="true"
                          ></i></span
                        ><span>Windows 10</span> )</span
                      >
                      <span>来自：<span>黑龙江省大庆市 电信</span></span>
                    </div>
                  </div>
                </div>
                <div class="content">
                  我是多无聊才会没事上这个网站摸摸这个小人儿。（界面看上去太舒服了，虽然什么也看不懂）已经忘了怎么阴差阳错的发现这个网站了。
                </div>
              </div>
              <div class="reply-list">
                <div class="reply-item"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="edit-comment">
          <div class="author-content">
            <div class="tips">
              <span class="dot">·</span>盆友，我们是正规群<span class="dot"
                >·</span
              >
            </div>
            <textarea
              @focus="handleChangeTipsStyle('focus')"
              @blur="handleChangeTipsStyle('blur')"
              name=""
              id=""
              cols="60"
              rows="15"
            ></textarea>
          </div>
          <div class="author-info">
            <div class="qqpic">
              <img v-if="fromMessage.qqpic" :src="fromMessage.qqpic" />
              <i
                v-else
                class="fa fa-user-secret"
                style="font-size: 20px"
                aria-hidden="true"
              ></i>
            </div>
            <div class="qqnumber">
              <input
                placeholder="qq号码(必填*)"
                @input="getqqMessage(fromMessage.qqnumber)"
                v-model="fromMessage.qqnumber"
                type="text"
              />
            </div>
            <div class="qqnickname">
              <input
                disabled
                placeholder="昵称(必填*)"
                v-model="fromMessage.qqnickname"
                type="text"
              />
            </div>
            <div class="email">
              <input
                disabled
                placeholder="邮箱(必填*)"
                v-model="fromMessage.email"
                type="text"
              />
            </div>
            <div class="web">
              <input
                placeholder="网站(选填)"
                v-model="fromMessage.website"
                type="text"
              />
            </div>
          </div>
          <div class="commit-btn">
            <div class="checking">
              <input
                id="isRobot"
                class="dot"
                :checked="!fromMessage.isRobot"
                type="radio"
              />
              <label for="isRobot">滴，学生卡 | I'm not a robot</label>
            </div>
            <div class="send">trach on~~~</div>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="content parent">
          <div class="setting" style="">
            <i class="fa fa-anchor fa-spin fa-2x fa-fw"></i>
          </div>
          <div style="font-size:14px;">Crafted with <i class="fa fa-heart" style='color:#E74C3C;' aria-hidden="true"></i> by George</div>
          <div class="beian">© 2021 ACG port <a>浙ICP备17028213号</a></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/ACGBLOG/nav/nav.vue";
import { dateFilter } from "@/utils/filters.js";
import { superSplice } from "@/lib/mySakura/sakuraPublic.js";
export default {
  filters: { dateFilter },
  components: {
    top: top,
  },
  data() {
    return {
      pages: {
        //需要提供列表的地方都需要此对象
        pageSize: 7,
        currentPage: 1,
        totalPage: 10,
        totalData: 0,
        status: 0,
        //xxxxxxxxxxxxxxxxxxxxxxxxxxxx
      },
      noticeDate:{
        
      },
      fromMessage: {
        qqpic: "",
        qqnumber: "",
        qqnickname: "",
        website: "",
        email: "",
        replyContent: "",
        isRobot: true,
        system: "",
        browser: "",
      },
      left: 0,
    };
  },
  created() {
    let id = this.$route.params.id || null;
    if (!id) console.log(this.$route.params);
    else this.init({ id });
    // this.handleArticalList();
  },
  mounted() {},
  methods: {
    init(params) {
      let id = params.id;
      this.$store.state.loading = false;
      this.initContent(id);
      // .then((statu) => {
      //   if (statu) {
      //     this.$store.state.loading = false;
      //   }
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
    },
    initContent(id) {},
    getqqMessage(number) {
      if (number.length > 8 && number.length < 11) {
        this.$api
          .getqqMessage(number)
          .then((result) => {
            result = superSplice(result, "(", 1);
            result = superSplice(result, ")", -1);
            let nickname = JSON.parse(result)[this.fromMessage.qqnumber];
            nickname = nickname[6];
            if (nickname) {
              this.fromMessage.qqnickname = nickname;
              this.fromMessage.email = number + "@qq.com";
              this.fromMessage.qqpic = `http://q1.qlogo.cn/g?b=qq&nk=${number}&s=100&t=1547904810`;
            }
            console.log(nickname);
          })
          .catch((result) => {
            console.warn(result);
          });
      }
    },
    handleChangeTipsStyle(event) {
      let tips = document.querySelector(".tips");
      let primary = getComputedStyle(tips).getPropertyValue("--primary-theme");
      switch (event) {
        case "focus":
          tips.style.color = primary;
          break;
        case "blur":
          tips.style.color = "#797979";
          break;
      }
    },
    /**
     * @description 点击事件--点击按钮控制幻灯片移动方向
     */

    handleClickSlideDirectionBtn(direction) {
      let slideList = slide2.getElementsByClassName("slide-list")[0];
      let items = slide2.getElementsByClassName("slide-item");
      let itemWidth = items[0].clientWidth + 20;
      if (!slideList.style["marginLeft"]) {
        slideList.style["marginLeft"] = 0;
      }
      if (items.lenght <= 0) {
        return;
      }
      switch (direction) {
        case "left":
          this.$nextTick(() => {
            slideList.style["marginLeft"] =
              Number.parseFloat(slideList.style["marginLeft"]) +
              itemWidth +
              "px";
            if (Number.parseFloat(slideList.style["marginLeft"]) >= 0) {
              setTimeout(() => {
                slideList.style["marginLeft"] = 0;
              }, 100);
            }
          });
          break;
        case "right":
          this.$nextTick(() => {
            slideList.style["marginLeft"] =
              Number.parseFloat(slideList.style["marginLeft"]) -
              itemWidth +
              "px";
            if (
              Number.parseFloat(slideList.style["marginLeft"]) <=
              itemWidth * (items.length - 2) * -1
            ) {
              setTimeout(() => {
                this.handleClickSlideDirectionBtn("left");
              }, 100);
            }
          });
          break;
      }
    },
  },
};
</script>

<style lang="scss" >
@import "./noticeContent.scss";
</style>