<template>
  <div class="blog">
    <bottom-bar></bottom-bar>
    <el-button type="primary" plain class="write" size="medium" @click="Release"
      >发布博客</el-button
    >
    <user-mess></user-mess>
    <el-button type="text" @click="open"></el-button>
    <resource-list :resource="resourceList"></resource-list>
  </div>
</template>

<script>
import UserMess from "components/content/UserMess";
import BottomBar from "components/common/BottomBar";
import ResourceList from "components/content/ResourceList";
import { GetBlog } from "network/blog";
export default {
  name: "Blog",
  components: {
    UserMess,
    BottomBar,
    ResourceList,
  },
  data() {
    return {
      name: null,
      resourceList: [],
    };
  },
  created() {
    this.name = this.$store.state.userdata.name;
    console.log(this.name);
    GetBlog().then((res) => {
      this.resourceList = res.retlist;
      this.resourceList = this.resourceList.reverse();
      console.log(res.retlist);
    });
  },
  methods: {
    Release() {
      if (this.name) {
        return this.$router.push("/release");
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
.blog {
  position: relative;
  width: 1500px;
  margin: 40px auto;
  background-color: #fff;
}
.write {
  position: absolute;
  right: 0;
}

.blog h2 {
  margin-top: 40px;
}
</style>