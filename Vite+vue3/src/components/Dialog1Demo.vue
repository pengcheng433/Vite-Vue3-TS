<template>
  <Button @click="openDialog1">打开1对话框</Button>
  <Dialog v-model:visibly="visibly1" :CANCEL="exit" :OK="OK" />
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

    const exit = () => {
      console.log("EXIT");
    };
    const OK = () => {
      console.log("OK");
    };


    return {
      visibly1,
      openDialog1,
      exit,
      OK,
    };
  },
};
</script>

<style>
</style>

