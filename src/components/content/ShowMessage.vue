<template>
  <div class="post-message">
    <h2>评论</h2>
    <show-message-item
      v-for="(item, index) in message"
      :MessageItem="item"
      :key="index"
    ></show-message-item>
  </div>
</template>

<script>
import ShowMessageItem from "./ShowMessageItem";
import { GetMessage } from "network/blog";
export default {
  name: "ShowMessage",
  components: {
    ShowMessageItem,
  },
  inject: ["reload"],
  data() {
    return {
      blogid: this.$route.params.id,
      message: [],
    };
  },
  created() {
    console.log(this.blogid);
    GetMessage(this.blogid).then((res) => {
      // console.log(res.retlist);
      this.message = res.retlist;
      console.log(this.message);
    });
  },
  mounted() {
    this.UpdateMessageListener = () => {
      this.reload();
    };
    this.$bus.$on("UpdateMessage", this.UpdateMessageListener);
  },
};
</script>

<style scoped>
.post-message {
  margin-left: 20%;
  margin-top: 20px;
  width: 1678px;
  margin-top: 50px;
  margin-left: 20%;
  background-color: #fff;
  padding: 20px 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
}
.post-message h2 {
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  color: black;
}
</style>