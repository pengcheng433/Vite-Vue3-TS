<template>
  <div>
    <input
      class="ui-input"
      :placeholder="placeholder"
      :value="value"
      @input="iptChange"
    />
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";

export default {
  props: {
    value: {
      type: String,
    },
  },
  setup(props, context) {
    const placeholder = context.attrs.placeholder || "";

    const iptChange = (e) => {
      context.emit("update:value", e.target.value);
    };
    return { placeholder, iptChange };
  },
};
</script>

<style  lang="scss">
$border-blue: #40a9ff;

.ui-input {
  outline-style: none;
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  &:hover {
    border-color: $border-blue;
    border-right-width: 1px !important;
  }
  &:focus {
    border-color: $border-blue;
    box-shadow: 0 0 0 2px RGB(24, 144, 255, 0.2);
    border-right-width: 1px !important;
    outline: 0;
  }
}
</style>