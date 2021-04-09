<template>
  <div class="forum-detail">
    <div class="main">
      <el-button class="backbtn" type="primary" @click="goback"
        >返回上一页</el-button
      >
      <h2>{{ forumtitle }}</h2>
      <h3>{{ username }}</h3>
      <p>{{ time }}</p>

      <show-forum-mess></show-forum-mess>
    </div>
    <div class="post-forummess">
      <post-forum-message></post-forum-message>
    </div>
    <user-mess position="position"></user-mess>
  </div>
</template>

<script>
import ShowForumMess from "./ShowForumMess";
import PostForumMessage from "./PostForumMessage";
import UserMess from "components/content/UserMess";
import { GetForumDetail, GetForumDetailMess } from "network/forum";
export default {
  name: "ForumDetail",
  data() {
    return {
      forumid: null,
      position: true,
      forumtitle: "",
      username: "",
      time: "",
    };
  },
  components: {
    ShowForumMess,
    PostForumMessage,
    UserMess,
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
  created() {
    this.forumid = this.$route.params.id;
    console.log(this.forumid);
    GetForumDetail(this.forumid).then((res) => {
      console.log(res.retlist[0]);
      this.forumtitle = res.retlist[0].forum_title;
      this.username = res.retlist[0].forum_name;
      this.time = res.retlist[0].release_time;
    });
  },
};
</script>

<style scoped>
.forum-detail {
  background-color: #f5f6f7;
  height: 100%;
  width: 100vh;
}
.main {
  width: 1678px;
  /* margin-top: 50px; */
  margin-left: 20%;
  background-color: #fff;
  padding: 70px 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
}
.main h2 {
  color: black;
  margin-bottom: 10px;
  margin-top: 10px;
}
.main h3 {
  margin-bottom: 10px;
  color: blueviolet;
}
.post-forummess {
  margin-top: 40px;
  margin-left: 210px;
  width: 1678px;
}
.backbtn {
  margin-top: -50px;
  margin-bottom: 10px;
}
</style>