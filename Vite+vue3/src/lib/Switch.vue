<template>
  <Switch v-model:value="y" />
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Switch from "../components/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup(props, context) {
    const y = ref(false);
    // const changValue = (event) => {
    //   y.value = event;
    // };
    return { y,  };
  },
};
</script>

<style>
</style>