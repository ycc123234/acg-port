<template >
  <div id="app-noticecontent">
    <top />
    <div class="main">
      <div class="title">
        <img
          src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
          data-src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
          class="title-bg lazyload"
          onerror="imgError(this,3)"
        />
        <div class="title-msg title-white">
          <div>
            <div class="title-text ">基于 SCSS mixin 的 flex gap polyfill</div>
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

      <div class="body">
        <div class="content">重要通知：2021年8月11日，本站正式成立！</div>
        <div class="tags">
          <i class="fa fa-tag" aria-hidden="true"></i>
          <div class="tag">无</div>
          <div class="tag">无</div>
        </div>
        <div id="slide2" class="slide">
           <div class="slide-ctrl">
              <div class="ctrl-left" style="">
                <i
                  class="fa fa-arrow-left fa-2x"
                  style=""
                  aria-hidden="true"
                ></i>
              </div>
              <div class="ctrl-right" @click="handleSlideRightBtn" style="">
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
              <div class="slide-item">
                <a>
                  <div class="slide-item-bg">
                    <img
                      src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
                    />
                  </div>
                  <div class="slide-item-info title-white">推荐阅读2</div>
                </a>
              </div>
              <div class="slide-item">
                <a>
                  <div class="slide-item-bg">
                    <img
                      src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
                    />
                  </div>
                  <div class="slide-item-info title-white">推荐阅读3</div>
                </a>
              </div>
              <div class="slide-item">
                <a>
                  <div class="slide-item-bg">
                    <img
                      src="https://2heng.xin/wp-content/uploads//2021/07/20210729_025259-scaled.jpg"
                    />
                  </div>
                  <div class="slide-item-info title-white">推荐阅读4</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/ACGBLOG/nav/nav.vue";
import { dateFilter } from "@/utils/filters.js";
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
      left:0
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
      this.initContent(id)
        .then((statu) => {
          if (statu) {
            this.$store.state.loading = false;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    initContent(id) {},
    handleSlideRightBtn(){
      let slideList=slide2.getElementsByClassName('slide-list')[0]
      let items=slide2.getElementsByClassName('slide-item');
      let itemWidth=items[0].clientWidth
      console.log(slideList.style)
      slideList.style.left-=itemWidth
    },
    handleSlideLeftBtn(){
      console.log()
    },
  },
};
</script>

<style lang="scss" >
@import "./noticeContent.scss";
</style>