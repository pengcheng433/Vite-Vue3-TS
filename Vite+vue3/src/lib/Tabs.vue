<template>
  <div class="ui-tabs">
    <div class="ui-tabs-nav" ref="container">
      <div
        class="ui-tabs-nav-item"
        :class="{ selected: t.props.title == selected, 'ui-tabs-nav-item-disabled': t?.props?.hasOwnProperty('disabled') }"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
        :key="index"
        @click="changgeTab(t)"
      >{{ t.props.title }}</div>
      <div ref="indicatorItem" class="ui-tabs-nav-indicator"></div>
    </div>
    <div class="ui-tabs-content">
      <component :is="Current" :key="Current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  onMounted,
  onUpdated,
  ref,
  watchEffect,
} from "@vue/runtime-core";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: String,
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicatorItem = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    const indicatorItemChangge = () => {
      const div = navItems.value;
      const res = div.filter((div) => div.classList.contains("selected"))[0];
      const { width } = res.getBoundingClientRect();
      indicatorItem.value.style.width = width + "px";

      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = res.getBoundingClientRect();
      const left = left2 - left1;
      indicatorItem.value.style.left = left + "px";
    };

    onMounted(indicatorItemChangge);

    onUpdated(indicatorItemChangge);
    const Vnode = context.slots.default();
    Vnode.forEach((element) => {
      if (element.type != Tab) {
        throw new Error("Tabs 的子标签必须是Tab");
      }
    });
    const titles = Vnode.map((tag) => {

      return tag;
    });
    const Current = computed(() => {
      return Vnode.filter((item) => {
        return item.props.title == props.selected;
      })[0];
    });

    const changgeTab = (t) => {
      if (!t?.props?.hasOwnProperty('disabled')) {

        context.emit("update:selected", t.props.title);
      }
    };

    return {
      titles,
      Vnode,
      changgeTab,
      navItems,
      Current,
      indicatorItem,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ui-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-item-disabled {
      color: #00000040;
      cursor: not-allowed;
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 0.25s;
    }
  }
  &-content {
    padding: 8px 0;
    // &-item {
    //   display: none;
    //   &.selected {
    //     display: block;
    //   }
    // }
  }
}
</style>

