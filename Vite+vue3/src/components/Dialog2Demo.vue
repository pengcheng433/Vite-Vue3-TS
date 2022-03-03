<template>
  <Button @click="openDialog2">打开2对话框</Button>
  <Dialog v-model:visibly="visibly2"  :CANCEL="exit" :OK="OK">
    <template #title>插槽标题</template>
    <template #main>
      <p>插槽内容1</p>
      <p>插槽内容2</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
export default {
  components: { Button, Dialog },
  setup() {
    const visibly2 = ref(false);


    const exit = () => {
      console.log("EXIT");
    };
    const OK = () => {
      console.log("OK");
    };
    const openDialog2 = () => {
      visibly2.value = !visibly2.value;
    };

    return {
      visibly2,
      openDialog2,
      exit,
      OK,
    };
  },
};
</script>

<style>
</style>

