<template >
  <div id="app-newslist">
    <bg-img />
    <top />
    <div class="main">
      <div class="flybtn">
        <div
          v-for="(item, i) in flybtns"
          :key="item.id"
          v-show="item.show"
          :class="item.classname"
          @mouseover="inhover(item,i)"
          @mouseout="outhover(item,i)"
        >
          <img :src="item.picurl" />
          <div
            v-show="item.drawer_show"
            :class="item.drawer_class"
            class="flybtn-drawer"
          >{{item.drawer_name}}</div>
        </div>
      </div>

      <div class="artical-list">
        <div class="artical-list-item ">

        </div>
        <div class="artical-list-item ">

        </div>
        <div class="artical-list-item ">

        </div>
        <div class="artical-list-item ">

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
      flybtns: [
        {
          id: 1,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-red-light",
          drawer_show: false,
          drawer_name: "cccc",
          drawer_class:'bg-red-light border-red-dark'
        },
        {
          id: 2,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-orange-light",
          drawer_show: false,
          drawer_name: "ccccccc",
          drawer_class:'bg-orange-light border-orange-dark'
        },
        {
          id: 3,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-yellow-light",
          drawer_show: false,
          drawer_name: "cccccc",
          drawer_class:'bg-yellow-light border-yellow-dark'
        },
        {
          id: 4,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-green-light",
          drawer_show: false,
          drawer_name: "cccccccccccccc",
          drawer_class:'bg-green-light border-green-dark'
        },
        {
          id: 5,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-blue-light",
          drawer_show: false,
          drawer_name: "ccccccccc",
          drawer_class:'bg-blue-light border-blue-dark'
        },
        {
          id: 6,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-indigo-light",
          drawer_show: false,
          drawer_name: "cccc",
          drawer_class:'bg-indigo-light border-indigo-dark'
        },
        {
          id: 7,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-violet-light",
          drawer_show: false,
          drawer_name: "cccc",
          drawer_class:'bg-violet-light border-violet-dark'
        },
      ],
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
    inhover (item,i){
      this.$nextTick(function(){
        this.flybtns[i].drawer_show=true;
      })

    },
    outhover(item,i){
      this.$nextTick(function(){
        this.flybtns[i].drawer_show=false;
      })
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
@import "./NewsList";
</style>