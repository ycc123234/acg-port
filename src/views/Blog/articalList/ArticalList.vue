<template >
  <div id="app-newslist">
    <bg-img />
    <top />
    <div class="main">
      <div class="artical-list">
        <div class="artical-list-item" @click="goContent(item.id)" v-for="(item) in  newlist " :key="item.intime">
          <div class="item-title">{{item.title}}</div>
          <div class="item-info">
            {{item.summary}}
          </div>
          <div class="item-createTime">发布于{{item.intime | dateFilter  }}</div>
        </div>
    
      </div>
    </div>
  </div>
</template>
<script>
import bgimg from "../../../components/BgImg.vue";
import top from "@/components/ACGBLOG/nav/nav.vue";
import { dateFilter } from "@/utils/filters";

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
      //文章列表
      newlist: [],

    };
  },
  filters:{
dateFilter
  },
  created() {
    this.getNoticeList();
  },
  mounted() {},
  methods: {
    goContent(id){
      this.$router.push("/blog/news/content/"+id);
    },
    getNoticeList() {
       this.$api.newslist(this.pages)
        .then((result) => {
          if(result.code==this.$consts.SQL_SELECT_SUCCESS){
            console.log(result)
            this.newlist=result.data.list;
          }else{
            console.log(result);
          }
        });
    },

  },
};
</script>

<style lang="scss" scoped >
@import "./articalList";
</style>