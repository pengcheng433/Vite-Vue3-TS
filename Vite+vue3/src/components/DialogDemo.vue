<template>
  <h1>对话框示例</h1>
  <Button @click="openDialog1">打开1对话框</Button>
  <Button @click="openDialog2">打开2对话框</Button>
  <Dialog v-model:visibly="visibly1" />
  <Dialog
    v-model:visibly="visibly2"
    :closeOnClickOverlay="true"
    :CANCEL="exit"
    :OK="OK"
  />
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";

export default {
  components: { Button, Dialog },
  setup() {
    const visibly1 = ref(false);
    const openDialog1 = () => {
      visibly1.value = !visibly1.value;
    };
    const visibly2 = ref(false);
    const openDialog2 = () => {
      visibly2.value = !visibly2.value;
    };
    const exit = () => {
      console.log("EXIT");
    };
    const OK = () => {
      console.log("OK");
    };
    return { visibly1, visibly2, openDialog1, openDialog2, exit, OK };
  },
};
</script>

<style>
</style>