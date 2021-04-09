<template>
  <div class="resource-list">
    <resource-list-item
      v-for="(item, index) in resource"
      :resourceitem="item"
      :key="index"
    ></resource-list-item>
  </div>
</template>

<script>
import ResourceListItem from "./ResourceListItem";
export default {
  name: "ResourceList",
  props: {
    resource: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    ResourceListItem,
  },
};
</script>

<style>
</style>