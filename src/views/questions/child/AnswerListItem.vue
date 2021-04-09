<template>
  <div class="answer-main">
    <div class="answer-list-item">
      <span class="name">{{ AnswerItem.answer_name }}</span>
      <span>{{ AnswerItem.answer_date }}</span>
      <p>{{ AnswerItem.answer_content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerListItem",
  props: {
    AnswerItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.answer-main {
  width: 1600px;
  margin-top: 50px;
  margin-left: 0%;
  background-color: #fff;
  padding: 70px 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
}
.answer-main span {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
  margin-right: 40px;
}
.answer-main p {
  margin-top: 15px;
}
.name {
  color: coral;
}
</style>