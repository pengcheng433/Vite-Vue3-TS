<template>
  <div>Tabs 示例</div>
  <Tabs>
    <Tab title="导航一">内容1</Tab>
    <Tab title="导航二">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: { Tab, Tabs },
};
</script>

<style>
</style>