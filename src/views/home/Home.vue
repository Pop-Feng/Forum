<template>
  <div class="home">
    <bottom-bar></bottom-bar>
    <h1>今日博客推荐：</h1>
    <resource-list :resource="HomeresourceList"></resource-list>
    <h1>今日论坛推荐：</h1>
    <forum-list :ForumList="HomeForumList"></forum-list>
    <h1>今日问答推荐：</h1>
    <question-list :QuestionList="HomeQuestion"></question-list>
    <user-mess></user-mess>
  </div>
</template>

<script>
import UserMess from "components/content/UserMess";
import BottomBar from "components/common/BottomBar";
import ResourceList from "components/content/ResourceList";
import ForumList from "views/forum/child/ForumList";
import QuestionList from "views/questions/child/QuestionList";
import { GetBlog } from "network/blog";
import { GetForum } from "network/forum";
import { GetQuestion } from "network/question";
export default {
  name: "Home",
  data() {
    return {
      HomeresourceList: [],
      HomeForumList: [],
      HomeQuestion: [],
    };
  },
  components: {
    UserMess,
    BottomBar,
    ResourceList,
    ForumList,
    QuestionList,
  },
  created() {
    this.name = this.$store.state.userdata.name;
    console.log(this.name);
    GetBlog().then((res) => {
      this.HomeresourceList = res.retlist.slice(-3);
      console.log(res.retlist);
    });
    GetForum().then((res) => {
      this.HomeForumList = res.retlist.slice(-3);
      console.log(res.retlist);
    });
    GetQuestion().then((res) => {
      this.HomeQuestion = res.retlist.slice(-3);
    });
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 1500px;
  background-color: #fff;

  margin: 40px auto;
}
.write {
  position: absolute;
  right: 0;
}
.home h1 {
  margin-top: 40px;
  margin-left: 10px;
  color: red;
}
</style>