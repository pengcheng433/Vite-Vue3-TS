<template>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" :disabled="true">禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
  <div>
    <Button theme="link" loading>加载中</Button>
    <Button theme="link">加载完毕</Button>
  </div>
  <div>
    <Button theme="text" loading>加载中</Button>
    <Button theme="text">加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
};
</script>

<style>
</style>