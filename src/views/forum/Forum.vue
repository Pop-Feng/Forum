<template>
  <div class="forum">
    <bottom-bar></bottom-bar>
    <el-button type="primary" plain class="write" size="medium" @click="Release"
      >发起一篇帖子</el-button
    >
    <forum-list :ForumList="forum"></forum-list>
    <user-mess></user-mess>
    <!-- <forum-list></forum-list> -->
  </div>
</template>

<script>
import UserMess from "components/content/UserMess";
import BottomBar from "components/common/BottomBar";
import ForumList from "./child/ForumList";
import { GetForum } from "network/forum";
export default {
  name: "Forum",
  components: {
    UserMess,
    BottomBar,
    ForumList,
  },
  data() {
    return {
      name: null,
      forum: [],
    };
  },
  created() {
    this.name = this.$store.state.userdata.name;
    console.log(this.name);
    GetForum().then((res) => {
      this.forum = res.retlist;
      this.forum = this.forum.reverse();
      console.log(this.forum);
    });
    // GetBlog().then((res) => {
    //   this.resourceList = res.retlist;
    //   console.log(res.retlist);
    // });
  },
  methods: {
    Release() {
      if (this.name) {
        return this.$router.push("/publishForum");
      } else {
        console.log(this.name);
        this.open();
      }
    },
    open() {
      this.$alert("<h3>请先登录</h3>", "提示：", {
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>

<style scoped>
.forum {
  position: relative;
  width: 1500px;
  background-color: #fff;
  margin: 40px auto;
}
.write {
  position: absolute;
  margin-top: 10px;
  right: 10px;
}
</style>