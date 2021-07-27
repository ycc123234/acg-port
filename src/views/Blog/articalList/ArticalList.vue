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
          :class="[item.classname, item.drawer_class]"
          @mouseover="inhover(item, i)"
          @mouseout="outhover(item, i)" >
          <img :src="item.picurl" />
          <div
            v-show="item.drawer_show || item.choose"
            :class="item.drawer_class"
            class="flybtn-drawer" >
            {{ item.drawer_name }}
          </div>
        </div>
      </div>

      <div class="artical-list">
        <div class="artical-list-item" @click="goContent(item.id)" v-for="(item ,i) in  newlist " :key="item.createTime">
          <div class="item-title">{{item.title}}</div>
          <div class="item-info">
            {{item.info}}
          </div>
          <div class="item-createTime">发布于{{item.createTime | dateFilter  }}</div>
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
      newlist: [{
        id:1,
        title:'自由与面包1',
        info:'西方学术界对所谓的“亚洲奇迹”普遍的共识是——其为西方经济学中要素增长模型的结果，但是在东方学术界，更为广泛认可的是东方社会特有的文化。本文试图从西方经济学与东方价值观的视角，分析亚洲文化的得失，思考我们自身的福祉。',
        createTime:1623746505158
      },
      {
        id:2,
        title:'自由与面包2',
        info:'西方学术界对所谓的“亚洲奇迹”普遍的共识是——其为西方经济学中要素增长模型的结果，但是在东方学术界，更为广泛认可的是东方社会特有的文化。本文试图从西方经济学与东方价值观的视角，分析亚洲文化的得失，思考我们自身的福祉。',
        createTime:162374605158
      },{
        id:3,
        title:'自由与面包3',
        info:'西方学术界对所谓的“亚洲奇迹”普遍的共识是——其为西方经济学中要素增长模型的结果，但是在东方学术界，更为广泛认可的是东方社会特有的文化。本文试图从西方经济学与东方价值观的视角，分析亚洲文化的得失，思考我们自身的福祉。',
        createTime:1623746505158
      }],
      flybtns: [
        {
          id: 1,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-grey-light",
          choose: true,
          drawer_show: false,
          drawer_name: "cccc",
          drawer_class: "bg-grey-light border-grey-dark",
        },
        {
          id: 2,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-grey-light",
          choose: false,
          drawer_show: false,
          drawer_name: "ccccccc",
          drawer_class: "bg-grey-light border-grey-dark",
        },
        {
          id: 3,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-grey-light",
          choose: false,
          drawer_show: false,
          drawer_name: "cccccc",
          drawer_class: "bg-grey-light border-grey-dark",
        },
        {
          id: 4,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-grey-light",
          choose: false,
          drawer_show: false,
          drawer_name: "cccccccccccccc",
          drawer_class: "bg-grey-light border-grey-dark",
        },
        {
          id: 5,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-grey-light",
          choose: false,
          drawer_show: false,
          drawer_name: "ccccccccc",
          drawer_class: "bg-grey-light border-grey-dark",
        },
        {
          id: 6,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-grey-light",
          choose: false,
          drawer_show: false,
          drawer_name: "cccc",
          drawer_class: "bg-grey-light border-grey-dark",
        },
        {
          id: 7,
          show: true,
          picurl: require("@/assets/img/text_icon.png"),
          name: "xxxx",
          classname: "bg-grey-light",
          choose: false,
          drawer_show: false,
          drawer_name: "cccc",
          drawer_class: "bg-grey-light border-grey-dark",
        },
      ],
    };
  },
  filters:{
dateFilter
  },
  created() {
    this.handleArticalList();
  },
  mounted() {},
  methods: {
    goContent(id){
      this.$router.push("/blog/news/content/"+id);
    },
    handleArticalList() {
      this.getArticalList();
    },
    inhover(item, i) {
      this.$nextTick(function () {
        this.flybtns[i].drawer_show = true;
      });
    },
    outhover(item, i) {
      this.$nextTick(function () {
        this.flybtns[i].drawer_show = false;
      });
    },
    getArticalList() {
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
@import "./articalList";
</style>