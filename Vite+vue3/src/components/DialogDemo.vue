<template>
  <h1>对话框示例</h1>
  <Button @click="openDialog">打开对话框</Button>
  <Dialog />
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";

export default {
  components: { Button, Dialog },
  setup() {
    const openDialog = () => {
      console.log(1);
    };
    return { openDialog };
  },
};
</script>

<style>
</style>