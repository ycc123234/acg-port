<template >
  <div id="app-newscontent">
    <bg-img />
    <top />
    <div class="main">
      <div class="content">
        <div class="outline">
          <div class="outline-title"><span>自由与面包</span></div>
          &nbsp;<div class="outline-author">·&nbsp;<span>Mashiro</span></div>
          &nbsp;<div class="outline-date">·&nbsp;<span>2018-03-07</span></div>
          &nbsp;<div class="outline-visits">·&nbsp;<span>6,946</span>次阅读</div>
          <div></div>
        </div>
        <div class="info">
          <a href="#d1">1</a>
          <br>
          <br>
          <br>
          <a id='d1'>11</a>
          <a id="d2">111</a>
          <a id="d3">1111</a>
        </div>
      </div>
      <div class="mini-list">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bgimg from "../../../components/BgImg.vue";
import top from "@/components/ACGBLOG/nav/nav.vue";

export default {
  components: {
    "bg-img": bgimg,
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
      
    };
  },
  created() {
    // this.handleNewsList();
  },
  mounted() {},
  methods: {
    handleNewsList() {
      getNewsList();
    },
    getNewsList() {
      // newsList数据获取
      this.$axios
        .get("/cms/artical/list", { params: this.pages })
        .then((result) => {
          return result.data.data.list;
        });
    },
  },
};
</script>

<style lang="scss" scoped >
@import "./NewsContent.scss";
</style>