<template>
  <div class="app-admin-login">
    <table></table>
    <div class="login">
      <table></table>
      <div>
        <div class="login-input">
          <div class="username">
            <div>
              <label for="username-input">用户名／邮件地址：</label>
            </div>

            <div>
              <el-input id="username-input" placeholder="请输入账号" v-model="username" clearable></el-input>
            </div>
          </div>
          <div class="password">
            <div>
              <label for="password-input">密码：</label>
            </div>
            <div>
              <el-input id="password-input" placeholder="请输入密码" v-model="password" show-password></el-input>
            </div>
          </div>
          <table></table>
          <div class="login-btn">
            <el-button type="primary" @click="login">Link Start</el-button>
          </div>
        </div>
        <div id="loginInfo">有事启奏，无事退朝。</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},
  mounted() {
    console.log("===========>");
    console.log("data", this.$store);
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    onInput() {
      console.log("123234");
      this.$forceUpdate();
    },
    login() {
      const params = this.$qs.stringify({
        username: this.username,
        password: this.password
      });
      this.$axios
        .post("/cms/login", params)
        .then(result => {
          console.log(result);
          if(!this.username){
            loginInfo.innerHTML="用户名不能为空"

          }else if(!this.password){
            loginInfo.innerHTML="密码也能为空？"

          }else{

            switch (result.data.code) {
              case 2103:
                this.changeLogin({ Authorization: result.data.token });
                this.$router.push("/admin");
                break;
              case 2104:
                this.$router.push("/admin");
                break;
              case 2105:
                this.password="";
                loginInfo.innerHTML=result.data.msg
                this.changeLogin({ Authorization: "" });
                break;
              default :
                loginInfo.innerHTML=result.data.msg
            }
          }
        })
        .catch(error => console.log("error", error));
    }
  }
};
</script>

<style lang="sass" scoped>
@import './Login.scss'
</style>