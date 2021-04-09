<template>
  <div class="questing-list">
    <div class="bar">
      <h2>问题列表</h2>
      <h2>提问人</h2>
    </div>
    <question-list-item
      v-for="(item, index) in QuestionList"
      :QuestionListItem="item"
      :key="index"
    >
    </question-list-item>
  </div>
</template>

<script>
import QuestionListItem from "./QuestionListItem";
export default {
  name: "QuestionList",
  components: {
    QuestionListItem,
  },
  props: {
    QuestionList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.questing-list {
  margin-left: 10px;
}
.bar {
  margin-top: 30px;
}
.questing-list .bar {
  display: flex !important;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}
.bar h2 {
  margin-top: 60px;
  flex: 1;
}
</style>