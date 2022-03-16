<template>
  <div class="ui-input-div" v-if="istextarea !== 'textarea'">
    <input
      class="ui-input"
      :class="`ui-input-size-${size}`"
      :placeholder="placeholder"
      :value="value"
      @input="iptChange"
      :type="ispasswordVisibly == true ? 'password' : 'text'"
    />

    <div @click="showpass" v-if="ispassword" class="ui-input__suffix">
      <svg>
        <use xlink:href="#icon-eye" />
      </svg>
    </div>
  </div>
  <div class="ui-textarea-area" v-else>
    <textarea class="ui-textarea" :value="value" :placeholder="placeholder" :rows="rows"></textarea>
  </div>
</template>
<!-- 4w  

 -->
<script lang="ts">
import { ref } from "@vue/reactivity";
import { onBeforeMount, onMounted } from "vue";

export default {
  props: {
    value: {
      type: String,
    },
    size: {
      type: String,
      default: "default",
    },
    rows: {
      type: String || Number,
      default: 4,

    }

  },
  setup(props, context) {
    const placeholder = context.attrs.placeholder || "";

    const iptChange = (e) => {
      context.emit("update:value", e.target.value);
    };
    let ispassword = context.attrs.hasOwnProperty("show-password")
    let istextarea = context.attrs.hasOwnProperty("type") == true ? context.attrs.type : ""


    const ispasswordVisibly = ref<Boolean>(false);

    onBeforeMount(() => {
      ispasswordVisibly.value = ispassword
    })
    const showpass = () => {
      ispasswordVisibly.value = !ispasswordVisibly.value


    }

    return { placeholder, iptChange, ispassword, showpass, ispasswordVisibly, istextarea };
  },
};
</script>

<style  lang="scss">
$border-blue: #40a9ff;
$border-white: #d9d9d9;
.ui-input-div {
  width: 260px;
  position: relative;
  font-size: 14px;
  display: block;
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
    border: 1px solid $border-white;
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
    &-size-large {
      padding: 6.5px 11px;
      font-size: 16px;
    }

    &-size-mini {
      padding: 0 7px;
    }
  }
  .ui-input__suffix {
    height: 100%;
    opacity: 0.3;
    position: absolute;
    right: 5px;
    margin: auto 0px;
    display: flex;
    align-items: center;
    cursor: pointer;
    top: 0;
    svg {
      width: 14px;
      height: 14px;
    }
  }
}
.ui-textarea-area {
  width: 400px;
  margin-bottom: 10px;
  .ui-textarea {
    padding: 10px;
    width: 100%;
    height: auto;
    min-height: 32px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
    border: 1px solid $border-white;
    border-radius: 4px;
    resize: vertical;
    &:hover {
      border-color: $border-blue;
      border-right-width: 1px;
    }
    &:focus {
      border-color: $border-blue;
      box-shadow: 0 0 0 1px $border-blue;
      border-right-width: 1px;
      outline: 0;
    }
  }
}
</style>