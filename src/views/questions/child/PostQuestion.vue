<template>
  <div class="post-question">
    <div class="title">问题发布</div>
    <div>
      <span>问题标题:</span>
      <input type="text" v-model="title" />
    </div>
    <div ref="editorContainer"></div>
    <div class="subbtn">
      <el-button type="primary" plain @click="Postquestion">发布</el-button>
      <el-button type="danger" plain @click="back">取消</el-button>
    </div>
  </div>
</template>

<script>
import { createEditor } from "@tanbo/textbus";
import "@tanbo/textbus/bundles/textbus.min.css";
import { PostQuestion } from "network/question";
export default {
  name: "PostQuestion",
  data() {
    return {
      data: null,
      title: "",
      name: "",
    };
  },
  mounted() {
    const editor = createEditor(this.$refs.editorContainer);
    editor.onChange.subscribe(() => {
      // console.log(editor.getContents());
      this.data = editor.getContents();
      console.log(this.data.content);
    });
  },
  created() {
    this.name = this.$store.state.userdata.name;
  },
  methods: {
    Postquestion() {
      if (this.name && this.data.content !== "<p><br></p>") {
        // console.log("发布问题");
        // console.log(this.title);
        // console.log(this.name);
        // console.log(this.data.content);
        const AllQuestionData = {};
        AllQuestionData.title = this.title;
        AllQuestionData.content = this.data.content;
        AllQuestionData.name = this.name;
        PostQuestion(AllQuestionData).then((res) => {
          console.log(res);
          this.$router.push("/questions");
        });
      } else {
        this.open();
      }
    },
    open() {
      this.$alert(
        "<h3>请先登录</h3></br><h3>或者回复内容为空</h3>",
        "发布回复失败：",
        {
          dangerouslyUseHTMLString: true,
        }
      );
    },
    back() {
      this.$router.push("/questions");
    },
  },
};
</script>

<style scoped>
.post-question .title {
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
.post-question span {
  margin-top: 100px;
  font-size: 25px;
  margin-left: 20px;
}
.post-question input {
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