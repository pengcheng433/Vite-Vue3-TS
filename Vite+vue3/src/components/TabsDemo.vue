<template>
  <h1>Tabs 组件示例</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Tabs1Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!routineVisibly" @click="openroutine">查看代码</Button>
      <Button v-else @click="openroutine">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre   v-if="routineVisibly"
        class="language-html"
        v-html="Prism.highlight(Tabs1DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>
  <div class="demo">
    <h2>禁用用法</h2>
    <div class="demo-component">
      <Tabs2Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!disabledVisibly" @click="opendisabled">查看代码</Button>
      <Button v-else @click="opendisabled">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre v-if="disabledVisibly"
        class="language-html"
        v-html="Prism.highlight(Tabs2DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Button from "../lib/Button.vue";

import "prismjs/themes/prism-okaidia.css";
const Prism = (window as any).Prism;
import "prismjs";
import Tabs1Demo from "./Tabs1Demo.vue";
import Tabs1DemoD from "./Tabs1Demo.vue?raw";
import Tabs2Demo from "./Tabs2Demo.vue";
import Tabs2DemoD from "./Tabs2Demo.vue?raw";
export default {
  components: { Tabs1Demo, Tabs2Demo, Button },
  setup() {
    const routineVisibly = ref(true);
    const disabledVisibly = ref(false);

    const openroutine = () => {
      routineVisibly.value = !routineVisibly.value;
    };
    const opendisabled = () => {
      disabledVisibly.value = !disabledVisibly.value;
    };
    return { Prism, Tabs1DemoD, Tabs2DemoD, routineVisibly,disabledVisibly,openroutine, opendisabled };
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