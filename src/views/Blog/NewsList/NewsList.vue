<template >
  <div id="app-newslist">
    <bg-img/>
    <top/>
    <div class="main">
      <div class="flybtn">
        <div class="flybtn-blue">
        
      </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import bgimg from "../../../components/BgImg.vue";
import top from '@/components/ACGBLOG/nav/nav.vue';

export default {
  components: {
    "bg-img": bgimg,
    "top":top
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
      },
    };
  },
  created() {
    this.handleNewsList();
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
@import "./NewsList.scss";
</style>