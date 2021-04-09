<template>
  <div class="blog-detail">
    <div class="main">
      <el-button type="primary" icon="el-icon-arrow-left" @click="backblog"
        >返回</el-button
      >
      <h2>{{ blogdetail.blog_title }}</h2>
      <span>发布者：</span>
      <h3>&nbsp;{{ blogdetail.blog_name }}</h3>
      <div class="content" v-html="blogdetail.blog_content">
        {{ blogdetail.blog_content }}
      </div>
    </div>
    <show-message></show-message>
    <post-message :blogid="id"></post-message>
    <user-mess position="position"></user-mess>
  </div>
</template>

<script>
import { GetBlogDetail } from "network/blog";
import PostMessage from "components/content/PostMessage";
import ShowMessage from "components/content/ShowMessage";
import UserMess from "components/content/UserMess";
export default {
  name: "BlogDetail",
  data() {
    return {
      id: null,
      blogdetail: {},
      position: true,
    };
  },
  components: {
    PostMessage,
    ShowMessage,
    UserMess,
  },
  methods: {
    backblog() {
      return this.$router.back();
    },
  },
  created() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    GetBlogDetail(this.id).then((res) => {
      // console.log(res);
      this.blogdetail = res.retlist[0];
      // console.log(this.blogdetail);
    });
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f5f6f7");
  },
};
</script>

<style scoped>
.blog-detail {
  background-color: #f5f6f7;
  height: 100%;
  width: 100vh;
}
.main {
  width: 1678px;
  margin-top: 50px;
  margin-left: 20%;
  background-color: #fff;
  padding: 70px 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
}
.main h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.main h3 {
  margin-left: 20px;
  margin-top: 10px;
  color: red;
}
.main span {
  color: blue;
  font-size: 20px;
}
.content {
  margin-top: 50px;
  border-top: 1px solid gray;
  padding-top: 20px;
}
.message {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  margin-left: 20%;
}
.message {
  width: 1678px;
  margin-top: 50px;
  margin-left: 20%;
  background-color: #fff;
  padding: 20px 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
}
.message h3 {
  border-bottom: 1px solid black;
}

.inputmessage {
  margin-top: 30px;
}
</style>