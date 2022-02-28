<template>
  <Switch v-model:value="boolean" />
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Switch from "../components/SwitchDemo.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const boolean = ref(false);
    // const changValue = (event) => {
    //   y.value = event;
    // };
    return { boolean };
  },
};
</script>

<style>
</style>