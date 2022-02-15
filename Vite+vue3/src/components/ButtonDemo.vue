<template>
  <div :class="size">
    <button v-bind="rest"><slot /></button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, context) {
    console.log(context);
    const { size, ...rest } = context.attrs;
    return { size, rest };
  },
};
</script>

<style>
</style>