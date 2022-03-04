<template>
  <button
   
    class="ui-switch"
    :class="{
      'ui-checked': value,
      'ui-switch-disabled': disabled,
      'ui-switch-loading': loading,
    }"
    @click="toggle"
  >
    <span class="ui-switch-inner" v-if="$attrs">{{
      value == true ? $attrs.checkedValue : $attrs.uncheckedValue
    }}</span>
    <span v-if="loading" class="ui-switch-loadingIndicator"></span>
  </button>
</template>

<script lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
export default {
  props: {
    value: { type: Boolean },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {
    let isdata = ref(null);
    onMounted(() => {});

    const toggle = () => {
      if (props.disabled || props.loading) {
        return false;
      }
      context.emit("update:value", !props.value);
    };

    return { toggle,  isdata };
  },
};
</script>

<style lang="scss" >
$h: 22px;
$h2: $h - 4px;
$blue: #40a9ff;
.ui-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  &-loading {
    cursor: not-allowed;
    opacity: 0.4;
  }
  &-loadingIndicator {
    position: absolute;
    right: 0;
    bottom: 0;
    top: 4px;
    left: 3px;
    z-index: 3;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: ui-spin 1s infinite linear;
    width: 14px;
    height: 14px;
    display: inline-block;
  }
  @keyframes ui-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &:after {
    position: absolute;
    top: 2px;
    left: 1px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 18px;
    cursor: pointer;
    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: " ";
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
  }

  // > span {
  //   position: absolute;
  //   top: 2px;
  //   left: 2px;
  //   height: $h2;
  //   width: $h2;
  //   background: white;
  //   border-radius: $h2 / 2;
  //   transition: all 250ms;
  // }
  &-inner {
    display: block;
    margin-right: 6px;
    margin-left: 24px;
    color: #fff;
    font-size: 12px;
  }
  &.ui-checked {
    background: #1890ff;
    > .ui-switch-inner {
      margin-right: 24px;
      margin-left: 6px;
    }
    &::after {
      left: 100%;
      margin-left: -1px;
      transform: translateX(-100%);
    }
    > .ui-switch-loadingIndicator {
      left: 27px;
    }
    // > span {
    //   left: calc(100% - #{$h2} - 2px);
    // }
  }

  &:focus {
    outline: none;
  }
  &:active {
    > span {
      // width: $h2 + 4px;
    }
  }
  &.ui-checked:active {
    > span {
      // width: $h2 + 4px;
      // margin-left: -4px;
    }
  }
  &-disabled {
    cursor: not-allowed;
    opacity: 0.6;
    &:active {
      > span {
        // width: $h2;
      }
    }
  }
}
</style>