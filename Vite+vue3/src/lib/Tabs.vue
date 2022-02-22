<template>
  <div class="ui-tabs">
    <div class="ui-tabs-nav">
      <div
        class="ui-tabs-nav-item"
        :class="{ selected: t == selected }"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
        :key="index"
        @click="changgeTab(t)"
      >
        {{ t }}
      </div>
      <div ref="indicatorItem" class="ui-tabs-nav-indicator"></div>
    </div>
    <div class="ui-tabs-content">
      <component
        class="ui-tabs-content-item"
        :class="{ selected: c.props.title == selected }"
        v-for="c in Vnode"
        :is="c"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from "@vue/runtime-core";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: String,
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicatorItem = ref<HTMLDivElement>(null);
    onMounted(() => {
      const div = navItems.value;
      const res = div.filter((div) => div.classList.contains("selected"))[0];
      const { width } = res.getBoundingClientRect();
      indicatorItem.value.style.width = width + "px";
    });
    const Vnode = context.slots.default();
    Vnode.forEach((element) => {
      if (element.type != Tab) {
        throw new Error("Tabs 的子标签必须是Tab");
      }
    });
    const titles = Vnode.map((tag) => {
      return tag.props.title;
    });
    const Current = computed(() => {
      Vnode.filter((item) => {
        item.props.title == props.selected;
      })[0];
    });

    const changgeTab = (t) => {
      context.emit("update:selected", t);
    };

    return { titles, Vnode, changgeTab, navItems, indicatorItem };
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>

