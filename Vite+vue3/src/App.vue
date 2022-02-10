<template>
  <router-view />
</template>
<script  lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const asideVisible = ref(false);
    provide("getmenuVisible",asideVisible)
  },
};
</script>
<style>
</style>
