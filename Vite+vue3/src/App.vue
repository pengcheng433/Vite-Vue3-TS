<template>
  <router-view />
</template>
<script  lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    // const asideVisible = ref(false);
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide("getmenuVisible", asideVisible);
  },
};
</script>
<style>
</style>
