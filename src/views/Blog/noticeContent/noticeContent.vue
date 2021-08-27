<template >
  <div id="app-noticecontent">
    <top />
    <div id="main" class="body">
      <div class="head-title">
        <img :src="noticeDate.title_pic" class="title-bg lazyload" />
        <div class="title-msg title-white">
          <div>
            <div class="title-text">{{ noticeDate.title }}</div>
            <div class="title-info">
              <!-- 圆形头像 -->
              <div class="title-face">
                <img :src="noticeDate.author_pic" />
              </div>
              <div class="dot">·</div>
              <!-- 作者名字 -->
              <div class="title-artical">{{ noticeDate.name }}</div>
              <div class="dot">·</div>

              <!-- 发布日期 -->
              <div class="title-date">
                {{ noticeDate.createtime | dateFilter }}
              </div>
              <div class="dot">·</div>

              <!-- 阅读次数 -->
              <div class="title-visit">{{ noticeDate.visits }}次阅读</div>
            </div>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="content" id="md2html">
          {{ noticeDate.md2html_content }}
        </div>
        <div class="tags">
          <i class="fa fa-tag" aria-hidden="true"></i>

          <div class="tag" v-for="item in noticeDate.tags" :key="item.id">
            <div class="tag" :data-tag-id="item.id">{{ item.tag_name }}</div>
          </div>
        </div>
        <div id="slide2" class="slide">
          <div class="slide-ctrl">
            <div
              class="ctrl-left"
              @click="handleClickSlideDirectionBtn('left')"
            >
              <i class="fa fa-arrow-left fa-2x" style="" aria-hidden="true"></i>
            </div>
            <div
              class="ctrl-right"
              @click="handleClickSlideDirectionBtn('right')"
            >
              <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div class="slide-view">
            <div class="slide-list">
              <div
                class="slide-item"
                v-for="item in noticeDate.slideList"
                :key="item.id"
              >
                <a>
                  <div class="slide-item-bg">
                    <img :src="item.url" />
                  </div>
                  <div class="slide-item-info title-white">
                    {{ item.title }}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="comments">
          <div class="head">
            <span style="font-size: 18px">Comments</span>
            <span class="dot">|</span>
            <span style="font-size: 14px"
              ><span>{{ noticeDate.comments.count }}</span
              >条评论</span
            >
          </div>
          <div class="list">
            <div
              class="item"
              v-for="item in noticeDate.comments.replys"
              :key="item.id"
            >
              <div class="comment">
                <div class="title">
                  <div class="reply-btn">Reply</div>
                  <div class="user-pic">
                    <img :src="item.user_pic" />
                  </div>
                  <div class="user-info">
                    <div class="nickname">{{ item.nickname }}</div>
                    <div class="info">
                      <span
                        >发布于 <span>{{ item.createTime |dateFilter }}</span>
                      </span>
                      <span
                        >(
                        <span
                          ><i class="fa fa-chrome" aria-hidden="true"></i
                        ></span>
                        <span> {{ item.user_browse }}</span>
                        <span
                          ><i
                            class="fa fa-windows"
                            aria-hidden="true"
                          ></i></span
                        ><span>{{ item.user_system }}</span> )</span
                      >
                      <span
                        >来自：<span>{{ item.ip_address }}</span></span
                      >
                    </div>
                  </div>
                </div>
                <div class="content">{{ item.reply_content }}</div>
              </div>
              <div class="reply-list">
                <div
                  class="reply-item"
                  v-for="_item in item._reply"
                  :key="_item.id"
                >
                  <div class="comment">
                    <div class="title">
                      <div class="reply-btn">Reply</div>
                      <div class="user-pic">
                        <img :src="_item.user_pic" />
                      </div>
                      <div class="user-info">
                        <div class="nickname">{{ _item.nickname }}</div>
                        <div class="info">
                          <span
                            >发布于 <span>{{ _item.createTime| dateFilter }}</span>
                          </span>
                          <span
                            >(
                            <span
                              ><i class="fa fa-chrome" aria-hidden="true"></i
                            ></span>
                            <span> {{ _item.user_browse }}</span>
                            <span
                              ><i
                                class="fa fa-windows"
                                aria-hidden="true"
                              ></i></span
                            ><span>{{ _item.user_system }}</span> )</span
                          >
                          <span
                            >来自：<span>{{ _item.ip_address }}</span></span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="content">
                      {{ _item.reply_content }}
                    </div>
                  </div>
                </div>
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
          <div style="font-size: 14px">
            Crafted with
            <i
              class="fa fa-heart"
              style="color: #e74c3c"
              aria-hidden="true"
            ></i>
            by George
          </div>
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
import { superSplice, getOS, getBrowse } from "@/lib/mySakura/sakuraPublic.js";
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
      noticeDate: {
        //head
        title: "基于 SCSS mixin 的 flex gap polyfill",
        title_pic:
          "https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg",
        author_name: "George",
        author_pic:
          "https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg",
        createtime: 1628649734129,
        visits: 866,
        //main
        md2html_content: "重要通知：2021年8月11日，本站正式成立！",
        tags: [
          { id: 1, tag_name: "魔性" },
          { id: 2, tag_name: "贫弱" },
        ],
        slideList: [
          {
            id: 1,
            url: "https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg",
            title: "推荐阅读1",
          },
        ],
        comments: {
          count: 17,
          replys: [
            {
              id: 1,
              pid: 0,
              nickname: "Kvein",
              user_pic:
                "https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg",
              createTime: 1630053645551,
              user_system: "Win10",
              user_browse: "chrome 92.0.4515.131",
              ip_address: "黑龙江省大庆市 电信",
              reply_content: "我是多无聊才会没事上这个网站摸摸这个小人儿。",
              _reply: [
                {
                  id: 1,
                  pid: 1,
                  nickname: "Kvein",
                  user_pic:
                    "https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg",
                  createTime: 1630053645551,
                  user_system: "Win10",
                  user_browse: "chrome 92.0.4515.131",
                  ip_address: "黑龙江省大庆市 电信",
                  reply_content: "我是多无聊才会没事上这个网站摸摸这个小人儿。",
                },
                {
                  id: 2,
                  pid: 1,
                  nickname: "Kvein",
                  user_pic:
                    "https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg",
                  createTime: 1630053645551,
                  user_system: "Win10",
                  user_browse: "chrome 92.0.4515.131",
                  ip_address: "黑龙江省大庆市 电信",
                  reply_content: "我是多无聊才会没事上这个网站摸摸这个小人儿。",
                },
              ],
            },
            {
              id: 2,
              pid: 0,
              nickname: "Kvein",
              user_pic:
                "https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg",
              createTime: 1630053645551,
              user_system: "Win10",
              user_browse: "chrome 92.0.4515.131",
              ip_address: "黑龙江省大庆市 电信",
              reply_content: "我是多无聊才会没事上这个网站摸摸这个小人儿。",
              _reply: [
                {
                  id: 1,
                  pid: 2,
                  nickname: "Kvein",
                  user_pic:
                    "https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg",
                  createTime: 1630053645551,
                  user_system: "Win10",
                  user_browse: "chrome 92.0.4515.131",
                  ip_address: "黑龙江省大庆市 电信",
                  reply_content: "我是多无聊才会没事上这个网站摸摸这个小人儿。",
                },
              ],
            },
          ],
        },
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
    console.log(getBrowse(), getOS());
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