<template>
  <router-view />
</template>
<script  lang="ts">
import { provide, ref } from "vue";
import { Router } from "./router";
export default {
  name: "App",
  setup() {
    // const asideVisible = ref(false);
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide("getmenuVisible", asideVisible);

    Router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
<style>
</style>
