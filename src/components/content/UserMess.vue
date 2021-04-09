<template>
  <div class="user-mess" :class="{ contonl: position }">
    <div class="nologin" v-show="isShow">
      <h2>{{ message }}</h2>
      <el-button type="primary" @click="GoSignIn" class="btn">登录</el-button>
      <el-button type="danger" @click="GoRegister" class="btn">注册</el-button>
    </div>
    <div class="loginMess" v-show="showMess">
      <h2>{{ message }}</h2>
      <p>{{ name }}</p>
      <el-button type="danger" class="signout" @click="signout">注销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserMess",
  props: {
    position: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      message: "请登录！",
      name: null,
      isShow: true,
      showMess: false,
      clearMess: {},
    };
  },
  created() {
    this.name = this.$store.state.userdata.name;
    console.log(this.name);
    if (this.name) {
      this.isShow = false;
      this.message = "欢迎你";
      this.showMess = true;
    } else {
      this.isShow = true;
    }
  },
  methods: {
    GoSignIn() {
      this.$router.push("/login");
    },
    GoRegister() {
      this.$router.push("/register");
    },
    signout() {
      this.$store.commit("update", this.clearMess);
      this.message = "请登录";
      this.showMess = false;
      this.isShow = true;
      console.log(this.name);
    },
  },
};
</script>

<style >
.user-mess {
  margin-top: 20px;
  width: 200px;
  position: fixed;
  right: 50px;
  top: 50px;
  padding-bottom: 10px;
  background-color: #f5f6f7;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 10px 10px #888888;
}
.nologin h2 {
  /* border: 1px solid red; */
  margin-top: 20px;
}
.user-mess h2 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  color: black;
}

.user-mess .btn {
  margin-left: 15px;
}
.loginMess {
  width: 200px;

  /* border: 1px red solid; */
}
.loginMess p {
  text-align: center;
  font-size: 30px;
  color: black;
}
.signout {
  margin-left: 63px;
  margin-top: 20px;
}
.contonl {
  right: 30px;
  top: 30px;
}
</style>