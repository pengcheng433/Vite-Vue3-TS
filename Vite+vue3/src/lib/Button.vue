<template>
  <div>Butoon 示例</div>
  <h1>示例1</h1>
  <div>
    <Button size="small" @mouseover="onclick" @focus="onclick" @click="onclick"
      >按钮</Button
    >
  </div>
</template>

<script lang="ts">
import Button from "../components/ButtonDemo.vue";
export default {
  components: { Button },
  setup() {
    const onclick = () => {
      console.log("你好");
    };
    return { onclick };
  },
};
</script>

<style>
</style>