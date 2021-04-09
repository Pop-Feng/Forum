<template>
  <div class="post-forum-message">
    <h2>回复</h2>
    <div ref="editorContainer"></div>
    <el-button type="primary" round class="postbtn" @click="postforummessage"
      >发布</el-button
    >
    <el-button type="text" @click="open"></el-button>
  </div>
</template>

<script>
import { createEditor } from "@tanbo/textbus";
import { PostForumMessage } from "network/forum";
import "@tanbo/textbus/bundles/textbus.min.css";
export default {
  name: "PostForumMessage",
  data() {
    return {
      data: null,
      name: null,
      forumid: null,
      forummessage: {},
    };
  },
  methods: {
    postforummessage() {
      if (this.$store.state.userdata.name && this.data !== "<p><br></p>") {
        this.name = this.$store.state.userdata.name;
        console.log("发布论坛回复");
        this.forummessage.data = this.data;
        this.forummessage.name = this.name;
        this.forummessage.forumid = this.forumid;
        // console.log(this.forummessage);
        PostForumMessage(this.forummessage).then((res) => {
          // console.log(res);
          this.$bus.$emit("UpdataForumMessage");
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
  },
  mounted() {
    const editor = createEditor(this.$refs.editorContainer);
    editor.onChange.subscribe(() => {
      // console.log(editor.getContents());
      this.data = editor.getContents().content;
      // console.log(this.data);
    });
  },
  created() {
    this.forumid = this.$route.params.id;
  },
};
</script>

<style scope>
.postbtn {
  margin-top: 10px;
  margin-left: 1590px;
}
</style>