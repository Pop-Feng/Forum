<template>
  <div class="show-forum-mess">
    <show-forum-mess-item
      v-for="(item, index) in forummesslist"
      :forummessitem="item"
      :item="index"
      :key="index"
    ></show-forum-mess-item>
  </div>
</template>

<script>
import ShowForumMessItem from "./ShowForumMessItem";
import { GetForumDetailMess } from "network/forum";
export default {
  name: "ShowForumMess",
  components: {
    ShowForumMessItem,
  },
  inject: ["reload"],
  data() {
    return {
      forummesslist: [],
      forumid: this.$route.params.id,
    };
  },
  created() {
    GetForumDetailMess(this.forumid).then((res) => {
      this.forummesslist = res.retlist;
      // this.forummesslist.reverse();
      console.log(this.forummesslist);
    });
  },
  mounted() {
    this.UpdataForumMessageListener = () => {
      this.reload();
    };
    this.$bus.$on("UpdataForumMessage", this.UpdataForumMessageListener);
  },
};
</script>

<style scoped>
</style>