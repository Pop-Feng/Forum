<template>
  <div class="show-message">
    <h3>发表回复</h3>
    <el-input
      type="textarea"
      :rows="4"
      placeholder="请输入内容"
      v-model="textarea"
      class="inputmessage"
      maxlength="100"
      :show-word-limit="true"
      :clearable="true"
    >
    </el-input>
    <el-button type="primary" class="postmessage" @click="postmessage"
      >发表<i class="el-icon-upload el-icon--right"></i
    ></el-button>
    <el-button type="text" @click="open"></el-button>
  </div>
</template>

<script>
import { PostMessage } from "network//blog";
export default {
  name: "PostMessage",
  data() {
    return {
      textarea: "",
      name: null,
    };
  },
  props: {
    blogid: "",
  },
  methods: {
    postmessage() {
      if (this.$store.state.userdata.name && this.textarea !== "") {
        this.name = this.$store.state.userdata.name;
        PostMessage(this.blogid, this.name, this.textarea).then((res) => {
          console.log(res);
          this.textarea = "";
          this.$bus.$emit("UpdateMessage");
        });
      } else {
        this.open();
      }
    },
    open() {
      this.$alert(
        "<h3>请先登录</h3></br><h3>或者评论内容为空</h3>",
        "发布评论失败：",
        {
          dangerouslyUseHTMLString: true,
        }
      );
    },
  },
  components: {},
};
</script>

<style scoped>
.show-message {
  width: 1678px;
  margin-top: 50px;
  margin-left: 20%;
  background-color: #fff;
  padding: 20px 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
}
.inputmessage {
  font-size: 23px;
  margin-top: 10px;
}
.postmessage {
  margin-top: 10px;
}
</style>