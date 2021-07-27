<template >
  <div class="app-blog">
    <div>
      <bg-img />
      <!-- 参考自:       https://www.reddit.com/r/roguelikedev/      -->

      <div id="myBlog">
        <!-- //nav -->
        <o-nav />
        <!-- //body -->

        <div id="main">
          <!-- //article -->
          <div class="item news">
            <div>
              <div class="news-title">
                <div>最新内容</div>
                <div class="more" @click="goArticalList">更多+</div>
              </div>
              <div class="news-content" v-for="(item, i) in newsList" :key="i">
                <div class="item" :data-id="item.id">
                  <div class="item-category" v-if="item.category == 1">
                    通知
                  </div>
                  <div class="item-category" v-else-if="item.category == 2">
                    活动
                  </div>
                  <div class="item-category" v-else-if="item.category == 3">
                    资料
                  </div>
                  <div class="item-category" v-else-if="item.category == 4">
                    热点
                  </div>
                  <div class="item-title">{{ item.title }}</div>
                  <div class="item-createtime">
                    {{ item.intime | dateFilter }}
                  </div>
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
import nav from "@/components/ACGBLOG/nav/nav.vue";
import { dateFilter } from "@/utils/filters.js";
export default {
  components: {
    "bg-img": bgimg,
    "o-nav": nav,
  },
  filters: {
    dateFilter,
  },
  data() {
    return {
      newsList: [
        {
          id: -1,
          category: 1,
          title: "数据获取失败",
          intime: new Date().getTime(),
        },
      ],
      pages: {
        pageSize: 7,
        currentPage: 1,
        totalPage: 10,
        totalData: 0,
        status: 0,
      },
    };
  },
  created() {
    this.getArticalList();
  },
  mounted() {},
  methods: {
    goArticalList: function () {
      this.$router.push("/blog/news/list");
    },
    getArticalList() {
      // newsList数据获取
      this.$api.newslist({ params: this.pages }).then((result) => {
         this.newsList = result.data.list;
      });
    },
  },
};
</script>

<style lang="scss" scoped >
@import "./Blog.scss";
</style>