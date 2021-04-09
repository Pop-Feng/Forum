<template>
  <div class="resource-list-item">
    <span class="time">发布日期：{{ resourceitem.release_time }}</span>
    <h2 class="title" @click="itemClick(resourceitem.id)">
      {{ resourceitem.blog_title }}
    </h2>
    <p v-html="resourceitem.blog_content" class="content">
      {{ resourceitem.blog_content }}
    </p>
    <span class="name">发布人：{{ resourceitem.blog_name }}</span>
  </div>
</template>

<script>
export default {
  name: "ResourceListItem",
  props: {
    resourceitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick(id) {
      // console.log(id);
      this.$router.push("/detail/" + id);
    },
  },
};
</script>

<style scoped>
.resource-list-item {
  /* border: 1px solid black; */
  margin-bottom: 50px;
  padding: 10px;
}
.resource-list-item span {
  margin-right: 20px;
}
.resource-list-item .name {
  font-size: 20px;
  color: blueviolet;
}
.resource-list-item .title {
  text-decoration: underline;
  margin-top: 20px;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  color: blue;
  font-weight: bold;
  font-family: verdana, Arial, Helvetica, sans-serif;
}
.title:hover {
  color: red;
  cursor: pointer;
  text-decoration: underline;
}
.resource-list-item .content {
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  margin-bottom: 30px;
  font-size: 16px;
}

.resource-list-item .time {
  color: #399ab2;
  font-size: 20px;
}
</style>