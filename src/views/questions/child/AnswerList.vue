<template>
  <div class="answer-item">
    <answer-list-item
      v-for="(item, index) in AnswerList"
      :key="index"
      :AnswerItem="item"
    ></answer-list-item>
  </div>
</template>

<script>
import AnswerListItem from "./AnswerListItem";
export default {
  name: "AnswerList",
  components: {
    AnswerListItem,
  },
  inject: ["reload"],
  props: {
    AnswerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    this.UpdateQuestionMessListener = () => {
      this.reload();
    };
    this.$bus.$on("UpdateQuestionMess", this.UpdateQuestionMessListener);
  },
};
</script>

<style scoped>
.answer-item {
  width: 1678px;
  margin-top: 50px;
  margin-left: 20%;
  background-color: #fff;
  padding: 70px 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
}
</style>