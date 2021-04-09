<template>
  <div class="questions">
    <bottom-bar></bottom-bar>
    <el-button
      type="danger"
      plain
      class="write-question"
      size="medium"
      @click="writequestion"
      >+ 提问题</el-button
    >
    <question-list :QuestionList="AllQuestion"></question-list>
    <user-mess></user-mess>
  </div>
</template>

<script>
import UserMess from "components/content/UserMess";
import BottomBar from "components/common/BottomBar";
import QuestionList from "./child/QuestionList";
import { GetQuestion } from "network/question";
export default {
  name: "Question",
  components: {
    UserMess,
    BottomBar,
    QuestionList,
  },
  data() {
    return {
      name: null,
      AllQuestion: [],
    };
  },
  created() {
    this.name = this.$store.state.userdata.name;
    console.log(this.name);
    GetQuestion().then((res) => {
      console.log(res.retlist);
      this.AllQuestion = res.retlist;
      this.AllQuestion = this.AllQuestion.reverse();
    });
  },
  methods: {
    writequestion() {
      if (this.name) {
        return this.$router.push("/postquesion");
      } else {
        this.open();
      }
    },
    open() {
      this.$alert("<h3>请先登录</h3>", "提示：", {
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>

<style scoped>
.questions {
  position: relative;
  width: 1500px;
  background-color: #fff;
  margin: 40px auto;
  padding: 20px;
}
.write-question {
  position: absolute;
  margin-top: 10px;
  right: 10px;
}
</style>