<template>
  <div class="publish-forum">
    <div class="title">论坛发布</div>
    <div>
      <span>帖子标题:</span>
      <input type="text" v-model="title" />
    </div>
    <!-- <div ref="editorContainer"></div> -->
    <div class="subbtn">
      <el-button type="primary" plain @click="Postforum">发布</el-button>
      <el-button type="danger" plain @click="back">取消</el-button>
    </div>
  </div>
</template>

<script>
import { createEditor } from "@tanbo/textbus";
import "@tanbo/textbus/bundles/textbus.min.css";
import { PostForum } from "network/forum";
export default {
  name: "PublishingForum",
  data() {
    return {
      title: "",
      data: "",
      name: null,
    };
  },
  mounted() {
    // const editor = createEditor(this.$refs.editorContainer);
    // editor.onChange.subscribe(() => {
    //   // console.log(editor.getContents());
    //   this.data = editor.getContents();
    //   // console.log(this.data.content);
    // });
  },
  created() {
    this.name = this.$store.state.userdata.name;
    console.log(this.name);
  },
  methods: {
    Postforum() {
      PostForum(this.title, this.name).then((res) => {
        console.log(res);
        return this.$router.go(-1);
      });
    },
    back() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.publish-forum .title {
  margin-top: 30px;
  line-height: 80px;
  text-align: center;
  font-size: 50px;
  margin-bottom: 50px;
  border-radius: 2px;
  background-color: black;
  height: 80px;
  color: #fff;
}
.publish-forum span {
  margin-top: 100px;
  font-size: 25px;
  margin-left: 20px;
}
.publish-forum input {
  font-size: 35px;
  width: 1500px;
  height: 60px;
  margin-bottom: 10px;
}
.subbtn {
  margin-top: 40px;
  margin-left: 90%;
}
</style>