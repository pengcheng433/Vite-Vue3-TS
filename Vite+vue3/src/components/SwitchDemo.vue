
<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch1Demo />
      </div>
      <div class="demo-actions">
        <Button v-if="!routineVisibly" @click="openroutine">查看代码</Button>
        <Button v-else @click="openroutine">隐藏代码</Button>
      </div>
      <div class="demo-code">
        <pre
          v-if="routineVisibly"
          class="language-html"
          v-html="Prism.highlight(Switch1DemoD, Prism.languages.html, 'html')"
        ></pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持disabled</h2>
      <div class="demo-component">
        <Switch2Demo />
      </div>
      <div class="demo-actions">
        <Button v-if="!disabledVisibly" @click="opendisabled">查看代码</Button>
        <Button v-else @click="opendisabled">隐藏代码</Button>
      </div>
      <div class="demo-code">
        <pre
          v-if="disabledVisibly"
          class="language-html"
          v-html="Prism.highlight(Switch2DemoD, Prism.languages.html, 'html')"
        ></pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持文字描述</h2>
      <div class="demo-component">
        <Switch3Demo />
      </div>
      <div class="demo-actions">
        <Button v-if="!textVisibly" @click="opentext">查看代码</Button>
        <Button v-else @click="opentext">隐藏代码</Button>
      </div>
      <div class="demo-code">
        <pre
          v-if="textVisibly"
          class="language-html"
          v-html="Prism.highlight(Switch3DemoD, Prism.languages.html, 'html')"
        ></pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持Loading</h2>
      <div class="demo-component">
        <Switch4Demo />
      </div>
      <div class="demo-actions">
        <Button v-if="!loadingVisibly" @click="openloading">查看代码</Button>
        <Button v-else @click="openloading">隐藏代码</Button>
      </div>
      <div class="demo-code">
        <pre
          v-if="loadingVisibly"
          class="language-html"
          v-html="Prism.highlight(Switch4DemoD, Prism.languages.html, 'html')"
        ></pre>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { ref } from "@vue/reactivity";
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";

import "prismjs/themes/prism-okaidia.css";
const Prism = (window as any).Prism;
import Switch2Demo from "./Switch2Demo.vue";
import Switch1Demo from "./Switch1Demo.vue";
import Switch3Demo from "./Switch3Demo.vue";
import Switch4Demo from "./Switch4Demo.vue";
import Switch2DemoD from "./Switch2Demo.vue?raw";
import Switch1DemoD from "./Switch1Demo.vue?raw";
import Switch3DemoD from "./Switch3Demo.vue?raw";
import Switch4DemoD from "./Switch4Demo.vue?raw";
import "prismjs";
export default {
  components: {
    Switch,
    Button,
    Switch1Demo,
    Switch2Demo,
    Switch3Demo,
    Switch4Demo,
  },

  setup() {
    const routineVisibly = ref(true);
    const disabledVisibly = ref(false);
    const textVisibly = ref(false);
    const loadingVisibly = ref(false);

    const openroutine = () => {
      routineVisibly.value = !routineVisibly.value;
    };
    const opendisabled = () => {
      disabledVisibly.value = !disabledVisibly.value;
    };
    const opentext = () => {
      textVisibly.value = !textVisibly.value;
    };
    const openloading = () => {
      loadingVisibly.value = !loadingVisibly.value;
    };
    return {
      Switch4DemoD,
      Switch3DemoD,
      Switch2DemoD,
      Switch1DemoD,
      Prism,
      routineVisibly,
      disabledVisibly,
      textVisibly,
      loadingVisibly,
      openroutine,
      opendisabled,
      opentext,
      openloading,
    };
  },
};
</script>


<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 0.3em;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>