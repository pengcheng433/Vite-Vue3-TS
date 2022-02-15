<template>
  <Switch :value="y" @input="y = $event" />
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Switch from "../components/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const y = ref(false);
    return { y };
  },
};
</script>

<style>
</style>