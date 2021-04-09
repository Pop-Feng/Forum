<template>
  <div class="show-message-item">
    <h2>{{ MessageItem.blog_reviewer }}</h2>
    <p>{{ MessageItem.comment }}</p>
  </div>
</template>

<script>
export default {
  name: "ShowMessageItem",
  props: {
    MessageItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    console.log(this.MessageItem);
  },
};
</script>

<style scoped>
.show-message-item {
  margin-left: 20px;
}
.show-message-item h2 {
  margin: 20px 0;
}
</style>