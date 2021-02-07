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
            <div class="title">{{ item.title }}</div>
            <div v-show="item.show" class="draw-box">
              <div v-for="(item, i) in item.children" :key="i">
                {{ item.itemTitle }}
              </div>
            </div>
          </li>
        </ul>
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
          title: "首页",
          show: false,
          children: [
            {
              id: 1,
              itemTitle: "11",
            },
            {
              id: 2,
              itemTitle: "222222222222222",
            },
            {
              id: 3,
              itemTitle: "33",
            },
          ],
        },
        {
          title: "首页",
          show: false,
          children: [
            {
              id: 1,
              itemTitle: "1111111111111",
            },
            {
              id: 2,
              itemTitle: "2",
            },
            {
              id: 3,
              itemTitle: "33",
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
    showDrawBox: function (index) {
      this.navList[index].show = true;
    },
    hideDrawBox: function (index) {
      this.navList[index].show = false;
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='sass' scoped>
@import './nav.scss'
</style>
