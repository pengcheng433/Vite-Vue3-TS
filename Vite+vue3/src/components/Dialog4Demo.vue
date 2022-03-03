<template>
  <Button @click="showDialog">打开4对话框</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";

export default {
  components: { Button, },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "openDialog标题",
        content: "openDialog你好 content",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };

    return {

      showDialog,

    };
  },
};
</script>

<style>
</style>

