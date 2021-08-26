<template>
  <div id="acg-nav">
    <div id="o-head">
      <div class="icon">
        <img
          src="https://www.wikimoe.com/content/uploadfile/tpl_options//logo.png"
        />
      </div>
      <div class="category">
        <ul class="bar">
          <li
            class="item"
            v-for="(item, i) in navList"
            :key="i"
            @mouseleave="hideDrawBox(i)"
            @mouseenter="showDrawBox(i)"
          >
            <div class="title" @click="goTo(item.route)">{{ item.title }}</div>
            <div v-show="item.show" class="draw-box">
              <div
                v-for="(item, i) in item.children"
                @click="goTo(item.route)"
                :key="i"
              >
                {{ item.itemTitle }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="pic-mode">
        壁纸模式：
        <input
          id="PicMode"
          type="checkbox"
          @click="
            (e) => {
              isMode(e, 'pic');
            }
          "
        />
      </div>
      <div class="information">
        <div class="sign">
          <div class="signin"></div>
          <div class="signup"></div>
        </div>
        <div class="search" @focusin="getFocus" @focusout="lostFocus">
          <input class="input-btn" type="button" />
          <input class="input-textarea" placeholder="整点活呗!!" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcgNav",
  data() {
    return {
      navList: [
        {
          id: 1,
          title: "首页",
          show: false,
          children: [],
          route: "/blog",
        },
        {
          id: 2,
          title: "归档",
          show: false,
          route: "/blog/news/list",
          children: [
            {
              id: 21,
              itemTitle: "文章",
              route: "/blog/news/list",
            },
            {
              id: 22,
              itemTitle: "随想",
              route: "",
            },
            {
              id: 23,
              itemTitle: "笔记",
              route: "",
            },
          ],
        },
        {
          id: 3,
          title: "留言板",
          show: false,
          children: null,
          route: "",
        },
        {
          id: 4,
          title: "友人帐",
          show: false,
          children: null,
          route: "",
        },
        {
          id: 5,
          title: "打赏",
          show: false,
          children: null,
          route: "",
        },
        {
          id: 6,
          title: "关于",
          show: false,
          route: "",
          children: [
            {
              id: 61,
              itemTitle: "我？",
              route: "",
            },
            {
              id: 62,
              itemTitle: "统计",
              route: "",
            },
            {
              id: 63,
              itemTitle: "监控",
              route: "",
            },
          ],
        },
      ],
    };
  },

  created() {
    // this.getData();
  },
  mounted() {},
  methods: {
    // ...mapMutations([test]),
    isMode(e, mode) {
      switch (mode) {
        //壁纸模式
        case "pic":
          var mainElem =
            
            document.getElementById("main") || document.getElementsByClassName("main")[0] ;
          var navElem = document.getElementById("o-head");

          mainElem.style.transition = "opacity .3s";

          this.$store.commit("picMode", e.target.checked);
          if (e.target.checked) {
            mainElem.style.opacity = "0";
            setTimeout(() => {
              mainElem.style.visibility = "hidden";
            }, 300);
            navElem.style.transition = "top .3s";

            window.onmousemove = function (e) {
              if (e.clientY <= 70) {
                navElem.style.top = "0";
              } else {
                navElem.style.top = "-65px";
              }
            };
          } else {
            window.onmousemove = function () {};
            mainElem.style.visibility = "visible";
            mainElem.style.opacity = "1";
          }
          break;
      }
    },
    showDrawBox: function (index) {
      this.navList[index].show = true;
    },
    hideDrawBox: function (index) {
      this.navList[index].show = false;
    },
    goTo(router) {
      this.$router.push(router);
    },
    getFocus: function (elem) {
      elem.currentTarget.getElementsByClassName(
        "input-btn"
      )[0].style.backgroundPositionY = "-40px";
      elem.currentTarget.style.backgroundColor = "#ffffff";
      elem.currentTarget.getElementsByClassName(
        "input-textarea"
      )[0].style.color = "#EA2B73";
    },
    lostFocus: function (elem) {
      elem.currentTarget.getElementsByClassName(
        "input-btn"
      )[0].style.backgroundPositionY = "0px";
      elem.currentTarget.style.backgroundColor = "#363c41";
      elem.currentTarget.getElementsByClassName(
        "input-textarea"
      )[0].style.color = "#39c5bb";
    },

    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='sass' scoped>
@import './nav.scss'
</style>
