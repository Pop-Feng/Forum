<template>
  <div class="nav-head">
    <div class="el-tabs">
      <span>
        <a href="/home">
          <img src="~assets/logo.png" alt="" />
        </a>
      </span>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="el-tabs">
        <el-tab-pane label="首页" name="/home"></el-tab-pane>
        <el-tab-pane label="博客" name="/blog"></el-tab-pane>
        <el-tab-pane label="论坛" name="/forum"></el-tab-pane>
        <el-tab-pane label="问答" name="/questions"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "/home",
    };
  },
  components: {},
  methods: {
    handleClick(tab) {
      // console.log(tab);
      this.activeName = tab.name;
      return this.$router.push(tab.name);
    },
  },
};
</script>
<style>
.el-tabs {
  background-color: #fff;
  width: 100%;
}
.el-tabs__header {
  background-color: #fff;
}
.el-tabs__nav {
  margin-left: 250px;
}
.el-tabs {
  margin-left: 30px;
  margin-bottom: 30px;
}
.el-tabs__item {
  font-size: 30px !important;
}
.el-tabs .login {
  position: absolute;
  top: 0;
  right: 0;
}
.el-tabs .sign {
  display: inline;
}

.el-tabs span {
  position: absolute;
  left: -1px;
  top: 0px;
  background-color: #fff;
}
.el-tabs span img {
  width: 50px;
  height: 42px;
}
</style>