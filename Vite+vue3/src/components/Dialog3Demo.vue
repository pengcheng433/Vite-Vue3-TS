<template>
  <Button @click="openDialog3">打开3对话框</Button>

  <Dialog v-model:visibly="visibly3" :closeOnClickOverlay="true" :CANCEL="exit" :OK="OK"></Dialog>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
export default {
  components: { Button, Dialog },
  setup() {
    const visibly3 = ref(false);


    const exit = () => {
      console.log("EXIT");
    };
    const OK = () => {
      console.log("OK");
    };
    const openDialog3 = () => {
      visibly3.value = !visibly3.value;
    };

    return {
      visibly3,
      openDialog3,
      exit,
      OK,
    };
  },
};
</script>

<style>
</style>

