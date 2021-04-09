<template>
  <div class="show-forum-mess-item">
    <div class="forum-item">
      <div>
        <span class="name"
          ><span class="step">#{{ item + 1 }}<br /></span
          >{{ forummessitem.forum_reviewer }}</span
        >
      </div>
      <span class="contnet" v-html="forummessitem.forum_comment">{{
        forummessitem.forum_comment
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowForumMessItem",
  inject: ["reload"],
  data() {
    return {
      blogid: this.$route.params.id,
      message: [],
    };
  },
  props: {
    forummessitem: {
      type: Object,
      default() {
        return {};
      },
    },
    item: {
      type: Number,
      default: 1,
    },
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
.show-forum-mess-item {
  border: 1px #b9bbbd solid;
  margin-top: 20px;
}
.step {
  color: gray;
}
.name {
  display: inline-block;
  color: blueviolet;
  font-size: 18px;
  width: 150px;
  height: 100%;
}
.contnet {
  display: inline-block;
  /* border-left: 1px solid #b9bbbd; */
}
.show-forum-mess-item span {
  padding: 25px;
}
</style>