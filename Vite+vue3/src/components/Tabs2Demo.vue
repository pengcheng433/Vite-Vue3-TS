<template>
  <Tabs v-model:selected="selectedTitle">
    <Tab title="导航一">内容1</Tab>
    <Tab title="导航二" disabled>内容2</Tab>
    <Tab title="导航三">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: { Tab, Tabs },
  setup() {
    const selectedTitle = ref("导航一");
    return { selectedTitle };
  },
};
</script>

<style>
</style>