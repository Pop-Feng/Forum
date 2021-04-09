<template>
  <div class="question-detail">
    <div class="main">
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        @click="backblog"
        class="backbtn"
        >返回</el-button
      ><br />
      <span class="name">{{ questiondetail.question_name }}</span>
      <span class="post-date">{{ questiondetail.question_date }}</span>
      <h1>{{ questiondetail.question_title }}</h1>
      <h3 v-html="questiondetail.question_content">
        {{ questiondetail.question_content }}
      </h3>
    </div>
    <answer-list :AnswerList="detailanswer"></answer-list>
    <div class="post-answer">
      <el-input
        type="textarea"
        :rows="8"
        placeholder="请输入内容"
        v-model="textarea"
        :clearable="true"
        resize="none"
      >
      </el-input>
      <el-button
        type="danger"
        round
        class="postanswer-btn"
        @click="QuestionMessage"
        >提交</el-button
      >
    </div>
    <user-mess position="position"></user-mess>
  </div>
</template>

<script>
import UserMess from "components/content/UserMess";
import AnswerList from "./AnswerList";
import {
  PostAnswer,
  GetQuestionDetail,
  GetQuestionDetailAnswer,
} from "network/question";
export default {
  name: "QuestionDetail",
  data() {
    return {
      id: null,
      textarea: "",
      position: true,
      name: null,
      questiondetail: {},
      detailanswer: [],
    };
  },
  components: {
    AnswerList,
    UserMess,
  },
  methods: {
    QuestionMessage() {
      if (this.$store.state.userdata.name && this.textarea !== "") {
        console.log("发布回复成功");
        console.log(this.textarea);
        PostAnswer(this.id, this.name, this.textarea).then((res) => {
          console.log(res);
          this.$bus.$emit("UpdateQuestionMess");
        });
      } else {
        this.open();
      }
    },
    backblog() {
      return this.$router.back();
    },
    open() {
      this.$alert(
        "<h3>请先登录</h3></br><h3>或者评论内容为空</h3>",
        "发布评论失败：",
        {
          dangerouslyUseHTMLString: true,
        }
      );
    },
  },
  created() {
    this.name = this.$store.state.userdata.name;
    this.id = this.$route.params.id;
    console.log(this.id);
    console.log(this.name);
    GetQuestionDetail(this.id).then((res) => {
      console.log(res);
      console.log(res.retlist);
      this.questiondetail = res.retlist[0];
      console.log(this.questiondetail);
    });
    GetQuestionDetailAnswer(this.id).then((res) => {
      console.log(res.retlist);
      this.detailanswer = res.retlist;
    });
  },
};
</script>

<style scoped>
.question-detail {
  background-color: #f5f6f7;
  height: 100%;
  width: 100vh;
}
.main {
  width: 1678px;
  margin-top: 50px;
  margin-left: 20%;
  background-color: #fff;
  padding: 70px 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
}
.main span {
  font-size: 18px;
}
.backbtn {
  margin-bottom: 10px;
}
.post-date {
  margin-left: 20px;
}
.post-answer {
  position: relative;
  width: 800px;
  height: 200px;
  margin-left: 210px;
  margin-top: 40px;
  background-color: #fff;
}
.postanswer-btn {
  position: absolute;
  margin-top: -20px;
  bottom: 10px;
  right: 0px;
}
.name {
  color: blueviolet;
}
</style>