<template>
  <div class="forum-list">
    <div class="bar">
      <h2 class="title">标题</h2>
      <h2>发布人</h2>
    </div>
    <forum-list-item
      v-for="(item, index) in ForumList"
      :forumlistitem="item"
      :key="index"
    ></forum-list-item>
  </div>
</template>

<script>
import ForumListItem from "./ForumListItem";
export default {
  name: "ForumList",
  components: {
    ForumListItem,
  },
  props: {
    ForumList: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  created() {
    console.log(this.ForumList);

  },
  methods: {
    ForumDetail(forumietmid) {
      this.forumid = forumietmid;
      console.log(this.forumid);
      this.$router.push("/forumdetail/" + this.forumid);
    },
  },

};
</script>

<style scoped>
.forum-list .bar {
  display: flex !important;
}
.bar h2 {
  margin-top: 60px;
  flex: 1;
  background-color: #e3e6e8;
}
.title {
  margin-left: 10px;
}
</style>