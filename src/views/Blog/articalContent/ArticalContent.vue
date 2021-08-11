<template >
  <div id="app-newscontent">
    <bg-img />
    <top />
    <div class="main">
      <div class="content">
        <div class="outline">
          <h1 class="outline-title">
            <span
              >自由与面包<test> <template> </template> </test
            ></span>
          </h1>
          &nbsp;
          <div class="outline-author">·&nbsp;<span>Mashiro</span></div>
          &nbsp;
          <div class="outline-date">·&nbsp;<span>2018-03-07</span></div>
          &nbsp;
          <div class="outline-visits">·&nbsp;<span>6,946</span>次阅读</div>
          <div></div>
        </div>

        <div id="textContent" class="info" v-show="isShow"></div>
      </div>
      <div class="mini-list">
        <div class="module_switch_title">
          <div
            v-for="(item, i) in boxSwitch"
            :key="item.id"
            @click="miniClick(i)"
            :v-show="item.display"
            :class="item.show ? 'module_choose' : ''"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="module_switch_content">
          <div v-show="boxSwitch[0].show" id="catalogs" class="directories">
            <div v-for="item in catalogs" :key="item.id">
              <span v-for="(iitem, i) in item.level" :key="i"
                >&nbsp;&nbsp;·&nbsp;&nbsp;</span
              ><a :href="item.anchorName">{{ item.name }} </a>
            </div>
          </div>
          <div v-show="boxSwitch[1].show" id="" class="comment">
            <div class="comment-content"></div>
            <form class="comment-textarea">
              <div class="submitinfo">
                <div class="nickname">
                  <span>昵称</span>
                  <input placeholder="昵称" type="text" />
                </div>
                <div class="email">
                  <span>邮箱</span>
                  <input placeholder="邮箱" type="email" />
                </div>
                <div class="send">
                  <button type="submit">发送</button>
                </div>
              </div>
              <textarea
                placeholder="你过来啊 ..."
                name="comment"
                class="commentbody"
                id="comment"
                resize="none"
                rows="6"
                tabindex="4"
              ></textarea>
              <!-- <label class="input-label active">你过来啊 ...</label> -->
            </form>
          </div>
          <div v-show="boxSwitch[2].show" class="other">
            <div class="other-list parent">
              <div class="other-list-item"><div>标题1</div></div>
              <div class="other-list-item"><div>标题2</div></div>
              <div class="other-list-item"><div>标题3</div></div>
            </div>
          </div>
          <div v-show="boxSwitch[3].show" class=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bgimg from "../../../components/BgImg.vue";
import top from "@/components/ACGBLOG/nav/nav.vue";
import testComponent from "@/components/testComponent.vue";
import Template from "../../../components/template.vue";
export default {
  components: {
    "bg-img": bgimg,
    top: top,
    test: testComponent,
  },
  data() {
    return {
      isShow: true,
      otherArr: [
        {
          id: 1,
          title: "标题1",
          picurl: require("@/assets/img/test.jpg"),
        },
        {
          id: 2,
          title: "标题2",
          picurl: require("@/assets/img/test.jpg"),
        },
        {
          id: 3,
          title: "标题3",
          picurl: require("@/assets/img/test.jpg"),
        },
        {
          id: 4,
          title: "标题4",
          picurl: require("@/assets/img/test.jpg"),
        },
      ],
      pages: {
        //需要提供列表的地方都需要此对象
        pageSize: 7,
        currentPage: 1,
        totalPage: 10,
        totalData: 0,
        status: 0,
        //xxxxxxxxxxxxxxxxxxxxxxxxxxxx
      },
      catalogs: [],
      boxSwitch: [
        {
          id: 1,
          display: true, //是否显示该选项
          picurl: require("@/assets/img/text_icon.png"),
          name: "目录",
          show: true, //选项是否被选中
          drawer_class: "bg-red-light",
        },
        {
          id: 2,
          display: true, //是否显示该选项
          picurl: require("@/assets/img/text_icon.png"),
          name: "评论",
          show: false, //选项是否被选中
          drawer_class: "bg-red-light",
        },
        {
          id: 3,
          display: true, //是否显示该选项
          picurl: require("@/assets/img/text_icon.png"),
          name: "其他文章",
          show: false, //选项是否被选中
          drawer_class: "bg-red-light",
        },
        {
          id: 4,
          display: true, //是否显示该选项
          picurl: require("@/assets/img/text_icon.png"),
          name: "打赏",
          show: false, //选项是否被选中
          drawer_class: "bg-red-light",
        },
      ],
    };
  },
  //
  beforeCreate() {},
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
      console.log("id", id);
      this.$store.state.loading=true
      this.initContent(id)
        .then((url) => {
          return new Promise((resolve, reject) => {
            this.$axios.get(url).then((result) => {
              textContent.innerHTML = result.data;
              resolve(true);
            });
          });
        })
        .then((statu) => {
          console.log("creaateCatalogs", statu);
          if (statu) {
            this.createCatalogs();
            return true;
          } else {
            consnole.log("目录创建失败");
            return false;
          }
        })
        .then((statu)=>{
          if(statu){
            this.$store.state.loading=false
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    initContent(id) {
      return this.$api.getNoticeContent(id).then((result) => {
        let data = result.data[0];
        let url = data.content;
        return url;
      });
    },
    /**
     * @description 创建目录
     * @property {String} textContent 正文内容
     */
    createCatalogs() {
      let arr = textContent.getElementsByClassName("catalog");
      let _catalogs = [];
      for (let i = 1; i <= arr.length; i++) {
        let item = arr[i - 1];
        let name = item.textContent;
        for (let j = 0; j < 2; j++) {}
        _catalogs.push({
          id: i,
          name: item.getElementsByTagName("a")[0].textContent,
          anchorName: `#${item.className}-${i}`,
          level: 2,
        });
        console.log();
      }
      this.catalogs = _catalogs;
    },
    miniClick(index) {
      this.$nextTick(function () {
        for (let i = 0; i < this.boxSwitch.length; i++) {
          this.boxSwitch[i].show = false;
        }
        this.boxSwitch[index].show = true;
      });
    },
    
  },
};
</script>

<style lang="scss" >
@import "./articalContent.scss";
</style>