<template>
  <div class="app-admin">
    <el-container style="overflow:hidden;">
      <el-aside>
        <div class="aside">
          <div class="menu">
            <el-menu
              default-active="1-4-1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              :collapse="isCollapse"
            >
              <div class="title" index="5" @click="collapseMenu">
                <div id="isCollapse">
                  <i class="el-icon-more"></i>
                </div>
                <div>cms管理系统</div>
              </div>
              <el-submenu index="1">
                <template slot="title" style="float:left;">
                  <i class="el-icon-location"></i>
                  <span slot="title">内容管理</span>
                </template>
                <el-menu-item-group>
                  <span slot="title">博客管理</span>
                  <el-menu-item index="1-1" @click="goArtical">文章管理</el-menu-item>
                  <el-menu-item index="1-2">聊天管理</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="用户管理">
                  <el-menu-item index="1-3">用户总览</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <span slot="title">选项4</span>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">日历系统</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">权限管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">个人管理</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
            <el-dropdown class="chooseSystem">
              <span class="el-dropdown-link">
                ACGBLOG
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>ACGBLOG</el-dropdown-item>
                <el-dropdown-item divided disabled>COC</el-dropdown-item>
                <el-dropdown-item disabled>DND</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="pageheader">详情页面</div>
            <div class="userinfo">
              <div class="nickname">{{user.nickname}}</div>
              <div class="avatar">
                <el-avatar
                  shape="square"
                  :size="50"
                  style="    vertical-align: middle;"
                  :src="squareUrl"
                ></el-avatar>
              </div>
            </div>
          </div>
        </el-header>
        <el-main>
          <div class="main">
            <div class="breadcrumb">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>
                  <a href="/">活动管理</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="body">
              <div class="element">
                <router-view ></router-view>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isCollapse: true,
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      bodyURL: "/admin/acgblog/artical",
      user: {
        nickname: "穷逼"
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    collapseMenu() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goBack() {
      console.log("go back");
    },
    goArtical(){
      this.$router.push({path: '/admin/acgblog/artical',query:this.user})
    }
  }
};
</script>

<style lang="sass" scoped>
@import './Admin.scss'
</style>