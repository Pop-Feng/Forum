<template>
  <div class="nav-head">
    <nav-head-item></nav-head-item>
  </div>
</template>
<script>
import NavHeadItem from "./NavHeadItem";
export default {
  data() {
    return {};
  },
  components: {
    NavHeadItem,
  },
  methods: {},
};
</script>

<style scoped>
.nav-head {
  height: 20px;
  background-color: #fff;
}
</style>