<template>
  <div class="question-list-item">
    <div class="bar">
      <span class="title" @click="QuestionDetail(QuestionListItem.id)">
        {{ QuestionListItem.question_title }}
      </span>
      <span>{{ QuestionListItem.question_name }}</span>
    </div>
    <p class="content" v-html="QuestionListItem.question_content">
      {{ QuestionListItem.question_content }}
    </p>
  </div>
</template>

<script>
export default {
  name: "QuestionListItem",
  props: {
    QuestionListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    QuestionDetail(Questionid) {
      // console.log(Questionid);
      this.$router.push("/questionditail/" + Questionid);
    },
  },
};
</script>

<style scoped>
.question-list-item {
  margin-top: 20px;
  border-bottom: 1px dotted #ccc;
}
.bar {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
}
.bar span {
  flex: 1;
  color: #075db3;
  font-size: 17px;
}
.content {
  display: inline-block;
  width: 700px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  margin-bottom: 30px;
  font-size: 16px;
}
.title {
  flex: 1;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 200px !important;
}
.title:hover {
  color: red;
  cursor: pointer;
}
</style>