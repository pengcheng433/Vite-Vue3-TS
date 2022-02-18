<template>
  <h1>对话框示例1</h1>
  <Button @click="openDialog1">打开1对话框</Button>
  <Button @click="openDialog2">打开2对话框</Button>
  <Button @click="openDialog3">打开3对话框</Button>
  <Dialog v-model:visibly="visibly1" :CANCEL="exit" :OK="OK" />
  <Dialog
    v-model:visibly="visibly2"
    :closeOnClickOverlay="true"
    :CANCEL="exit"
    :OK="OK"
  >
    <template #title>插槽标题</template>
    <template #main>
      <p>插槽内容1</p>
      <p>插槽内容2</p>
    </template>
  </Dialog>
  <Dialog
    v-model:visibly="visibly3"
    :closeOnClickOverlay="true"
    :CANCEL="exit"
    :OK="OK"
  >
    <template #title>插槽标题</template>
    <template #main>
      <Button @click="openDialog4">打开4对话框</Button>
      <Dialog
        v-model:visibly="visibly4"
        :closeOnClickOverlay="true"
        :CANCEL="exit"
        :OK="OK"
      >
        <template #title>对话框内的对话框</template>
        <template #main>
          <p>对话框内的对话框</p>
          <p>对话框内的对话框</p>
        </template>
      </Dialog>
    </template>
  </Dialog>
  <h1>对话框示例2</h1>
  <Button @click="showDialog">打开5对话框</Button>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { openDialog } from "../lib/openDialog";
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
    const visibly3 = ref(false);
    const openDialog3 = () => {
      visibly3.value = !visibly3.value;
    };
    const visibly4 = ref(false);
    const openDialog4 = () => {
      visibly4.value = !visibly4.value;
    };

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

    const exit = () => {
      console.log("EXIT");
    };
    const OK = () => {
      console.log("OK");
    };

    return {
      visibly1,
      visibly2,
      visibly3,
      visibly4,
      openDialog1,
      openDialog2,
      openDialog3,
      openDialog4,
      showDialog,
      exit,
      OK,
    };
  },
};
</script>

<style>
</style>