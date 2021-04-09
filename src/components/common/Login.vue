<template>
  <div class="login">
    <div class="main">
      <div class="title">
        <span>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</span>
      </div>

      <div class="title-msg">
        <span>请输入用户名和密码</span>
      </div>

      <form class="login-form" method="post" action="LoginMessage">
        <!-- 输入框 -->
        <div class="input-content">
          <div>
            <input
              type="text"
              placeholder="用户名"
              name="username"
              required
              v-model="username"
              autocomplete="off"
            />
          </div>
          <div style="margin-top: 16px">
            <input
              type="password"
              placeholder="密码"
              name="password"
              required
              v-model="password"
              autocomplete="off"
            />
          </div>
        </div>

        <!-- 登录按钮 -->
        <span class="login-btn" @click="LoginBtn">登录</span>

        <div class="foor">
          <div class="left"></div>
          <div class="right">
            <span @click="GoRegister">还没有账号，立即注册</span>
          </div>
          <el-alert
            title="用户名或密码错误"
            type="error"
            effect="dark"
            :center="true"
            v-show="tips1"
            :closable="false"
          >
          </el-alert>
        </div>
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
import { getLoginMultidata } from "network/startpage";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      tips1: false,
      lastpath: "",
      beforeUrl: "",
    };
  },
  created() {},
  methods: {
    LoginBtn() {
      // console.log("----");
      getLoginMultidata(this.username, this.password).then((res) => {
        if (res.ret === 0) {
          // console.log(res.id);
          // console.log(this.username);
          // console.log(this.password);
          const userdata = {};
          userdata.name = res.name;
          userdata.id = res.id;
          this.$store.commit("update", userdata);
          console.log("请求发送");
          return this.$router.push("/home");
        } else {
          this.tips1 = true;
          setTimeout(() => {
            this.tips1 = false;
          }, 3000);
        }
      });
    },
    GoRegister() {
      return this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.login {
  background-image: url("~assets/bg.png");
  background-repeat: no-repeat;
  height: 1000px;
  width: 1900px;
  margin-left: 120px;
}
.main {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  width: 400px;
  height: 400px;
  background-color: #fff;
  /*让表单垂直居中在界面*/
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -175px;
  margin-left: -175px;
  border: 1px solid #dad9d6;
}

.title {
  height: 40px;
  line-height: 40px;
  padding-left: 140px;
  border: 1px solid black;
  border-radius: 10px;
}

.title span {
  font-size: 30px;
}

.title-msg {
  height: 64px;
  line-height: 64px;
}

.title-msg span {
  font-size: 12px;
  color: gray;
}

.input-content input {
  width: 340px;
  height: 40px;
  border: 1px solid #dad9d6;
  padding-left: 10px;
}

.foor {
  font-size: 12px;
  color: gray;
  margin-top: 20px;
}

.left {
  float: left;
}

.right {
  float: right;
}
.right span:hover {
  cursor: pointer;
  color: blue;
}
a {
  text-decoration: none;
}

.login-btn {
  display: block;
  text-align: center;
  margin-top: 20px;
  width: 350px;
  height: 40px;
  line-height: 40px;
  color: white;
  background: #0bc5de;
  border: 0px;
  width: 350px;
}
</style>