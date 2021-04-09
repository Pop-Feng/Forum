<template>
  <div class="forum-list-item">
    <div class="item-bar">
      <span @click="ForumDetail(forumlistitem.id)">{{
        forumlistitem.forum_title
      }}</span>
      <span class="forum-name">{{ forumlistitem.forum_name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumListItem",
  props: {
    forumlistitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      forumid: null,
    };
  },
  methods: {
    ForumDetail(forumietmid) {
      this.forumid = forumietmid;
      console.log(this.forumid);
      this.$router.push("/forumdetail/" + this.forumid);
    },
  },
  created() {
    // console.log(this.forumlistitem);
    // console.log(this.forumlistitem.id);
  },
};
</script>

<style scoped>
.forum-list-item {
  padding: 10px;
}

.item-bar {
  display: flex;
  margin-top: 10px;
}
.item-bar span {
  flex: 1;
  border-bottom: 1px gray solid;
  font-size: 18px;
  padding: 10px 0;
}
.item-bar span:hover {
  color: orange;
  cursor: pointer;
}
</style>