<template>
  <div class="register">
    <div class="main">
      <div class="title">
        <span>注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</span>
      </div>

      <div class="title-msg">
        <span>请输入注册信息</span>
      </div>

      <form class="login-form" method="post" action="LoginMessage">
        <!-- 输入框 -->
        <div class="input-content">
          <div>
            <input
              type="text"
              placeholder="请输入您的名称"
              name="username"
              required
              v-model="name"
              autocomplete="off"
            />
          </div>
          <div style="margin-top: 16px">
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
          <div style="margin-top: 16px">
            <input
              type="password"
              placeholder="确认密码"
              name="password"
              required
              v-model="password1"
              autocomplete="off"
            />
          </div>
        </div>

        <!-- 登录按钮 -->
        <span class="enter-btn" @click="register">注册</span>
        <span class="enter-btn-2" @click="backsignin">返回</span>

        <div class="foor">
          <div class="left"></div>
          <!-- <div class="right">
          <span><a href="/register">还没有账号，立即注册</a></span>
          <br />
          <span></span>
        </div> -->
        </div>
      </form>
      <div></div>
      <el-alert
        title="注册成功"
        type="success"
        :center="true"
        v-show="tips2"
        :closable="false"
      >
      </el-alert>
      <el-alert
        title="注册信息填写有误！"
        type="error"
        effect="dark"
        :center="true"
        v-show="tips1"
        :closable="false"
      >
      </el-alert>
    </div>
  </div>
</template>

<script>
import { getRegisterMultidata } from "network/startpage";
export default {
  name: "Register",
  data() {
    return {
      name: null,
      username: null,
      password: null,
      password1: null,
      tips1: false,
      tips2: false,
    };
  },
  methods: {
    register() {
      if (
        this.name !== null &&
        this.username !== null &&
        this.password === this.password1 &&
        this.password !== null
      ) {
        this.tips2 = true;

        console.log(this.name);
        console.log(this.username);
        console.log(this.password);
        getRegisterMultidata(this.name, this.username, this.password).then(
          (res) => {
            console.log(typeof res.ret);
            if (res.ret === 0) {
              return this.$router.push("/login");
            }
          }
        );
      } else {
        this.tips1 = true;
        setTimeout(() => {
          this.tips1 = false;
        }, 2000);
      }
    },
    backsignin() {
      return this.$router.push("/login");
    },
  },
  computed: {},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.register {
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
  height: 500px;
  background: white;
  /*让表单垂直居中在界面*/
  position: absolute;
  top: 40%;
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

.enter-btn {
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
.enter-btn-2 {
  display: block;
  text-align: center;
  margin-top: 20px;
  width: 350px;
  height: 40px;
  line-height: 40px;
  color: white;
  background: red;
  border: 0px;
  width: 350px;
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

a {
  text-decoration: none;
}
.WarmMess {
  display: none;
}
</style>