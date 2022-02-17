<template>
  <h1>对话框示例</h1>
  <Button @click="openDialog">打开对话框</Button>
  <Dialog :visibly="visibly" />
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";

export default {
  components: { Button, Dialog },
  setup() {
    const visibly = ref(false);
    const openDialog = () => {
      visibly.value=!visibly.value
    };

    return { visibly,openDialog };
  },
};
</script>

<style>
</style>