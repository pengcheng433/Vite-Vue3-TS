<template>
  <button class="btn" :class="`theme-${theme}`"><slot /></button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style >
</style>