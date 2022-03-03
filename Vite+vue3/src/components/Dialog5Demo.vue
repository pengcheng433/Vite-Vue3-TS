<template>
  <Button @click="openDialog3">打开4对话框</Button>
  <Dialog v-model:visibly="visibly3" :closeOnClickOverlay="true" :CANCEL="exit" :OK="openDialog4">
    <template #title>插槽标题</template>
    <template #main>
      点击ok打开嵌套对话框
      <Dialog v-model:visibly="visibly4" :closeOnClickOverlay="true" :CANCEL="exit" :OK="OK">
        <template #title>对话框内的对话框</template>
        <template #main>
          <p>对话框内的对话框</p>
          <p>对话框内的对话框</p>
        </template>
      </Dialog>
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

    const visibly3 = ref(false);
    const visibly4 = ref(false);
    const openDialog3 = () => {
      visibly3.value = !visibly3.value;
    };

    const openDialog4 = () => {
      visibly4.value = !visibly4.value;
    };



    const exit = () => {
      console.log("EXIT");
    };
    const OK = () => {
      console.log("OK");
    };

    return {
      visibly3, visibly4,exit,OK,
      openDialog3, openDialog4

    };
  },
};
</script>

<style>
</style>

