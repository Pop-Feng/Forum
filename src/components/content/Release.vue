<template>
  <div class="release">
    <div class="title">博客发布</div>
    <div>
      <span>博客标题:</span>
      <input type="text" v-model="title" />
    </div>
    <div ref="editorContainer"></div>
    <div class="subbtn">
      <el-button type="primary" plain @click="Postblog">发布</el-button>
      <el-button type="danger" plain @click="back">取消</el-button>
    </div>
  </div>
</template>

<script>
import { createEditor } from "@tanbo/textbus";
import "@tanbo/textbus/bundles/textbus.min.css";
import { PostBlog } from "network/register";
export default {
  name: "Release",
  data() {
    return {
      title: "",
      data: "",
      name: null,
    };
  },
  mounted() {
    const editor = createEditor(this.$refs.editorContainer);
    editor.onChange.subscribe(() => {
      // console.log(editor.getContents());
      this.data = editor.getContents();
      // console.log(this.data.content);
    });
  },
  created() {
    this.name = this.$store.state.userdata.name;
    console.log(this.name);
  },
  methods: {
    Postblog() {
      console.log(this.title);
      console.log(this.data.content);
      console.log(this.name);
      const Alldata = {};
      Alldata.name = this.name;
      Alldata.title = this.title;
      Alldata.content = this.data.content;
      console.log(Alldata);
      PostBlog(Alldata).then((res) => {
        console.log(res);
        this.$router.push("/blog");
      });
    },
    back() {
      this.$router.push("/blog");
    },
  },
};
</script>

<style scoped>
.release .title {
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
.release span {
  margin-top: 100px;
  font-size: 25px;
  margin-left: 20px;
}
.release input {
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