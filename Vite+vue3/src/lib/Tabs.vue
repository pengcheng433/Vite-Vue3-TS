<template>
  <h2>Tasb 组件</h2>
  <div v-for="(title,key) in titles" :key="key">
    {{ title }}
  </div>
  <component v-for="(c, index) in Vnode" :is="c" :key="index"></component>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const Vnode = context.slots.default();
    Vnode.forEach((element) => {
      if (element.type != Tab) {
        throw new Error("Tabs 的子标签必须是Tab");
      }
    });
    const titles = Vnode.map((tag) => {
      return tag.props.title;
    });
    return { titles, Vnode };
  },
};
</script>

<style>
</style>

