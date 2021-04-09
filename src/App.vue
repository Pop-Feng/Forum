<template>
  <div id="app">
    <div v-if="this.$route.meta.keepAlive">
      <nav-head></nav-head>
      <router-view v-if="isRouterAlive"></router-view>
    </div>
    <div v-if="!this.$route.meta.keepAlive">
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>

<script>
import NavHead from "components/content/NavHead";

export default {
  name: "App",
  components: {
    NavHead,
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  provide() {
    //提供
    return {
      reload: this.reload,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style scoped>
#app {
  height: 100%;
  background-color: #f5f6f7;

}
@import url("assets/css/base.css");
</style>
