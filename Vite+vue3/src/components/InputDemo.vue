<template>
  <h1>输入框组件示例</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Input1Demo></Input1Demo>
    </div>
    <div class="demo-actions">
      <Button v-if="!routineVisibly" @click="openroutine">查看代码</Button>
      <Button v-else @click="openroutine">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-if="routineVisibly"
        class="language-html"
        v-html="Prism.highlight(Input1DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持size</h2>
    <div class="demo-component">
      <Input2Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!sizeVisibly" @click="opensize">查看代码</Button>
      <Button v-else @click="opensize">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-if="sizeVisibly"
        class="language-html"
        v-html="Prism.highlight(Input2DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持密码</h2>
    <div class="demo-component">
      <Input3Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!passwordVisibly" @click="openpassword">查看代码</Button>
      <Button v-else @click="openpassword">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-if="passwordVisibly"
        class="language-html"
        v-html="Prism.highlight(Input3DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>

  <div class="demo">
    <h2>支持文本框</h2>
    <div class="demo-component">
      <Input4Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!textareaVisibly" @click="opentextarea">查看代码</Button>
      <Button v-else @click="opentextarea">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-if="textareaVisibly"
        class="language-html"
        v-html="Prism.highlight(Input4DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import Input from "../lib/Input.vue";
import Input1Demo from "./Input1Demo.vue";
import Input1DemoD from "./Input1Demo.vue?raw";
import Input2Demo from "./Input2Demo.vue";
import Input2DemoD from "./Input2Demo.vue?raw";
import Input3Demo from "./Input3Demo.vue";
import Input3DemoD from "./Input3Demo.vue?raw";
import Input4Demo from "./Input4Demo.vue";
import Input4DemoD from "./Input4Demo.vue?raw";
import { ref } from "@vue/reactivity";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
    Input,
    Input1Demo, Input2Demo, Input3Demo, Input4Demo
  },
  setup() {
    const routineVisibly = ref(false);
    const sizeVisibly = ref(false);
    const passwordVisibly = ref(false);
    const textareaVisibly = ref(false);
    const openroutine = () => {
      routineVisibly.value = !routineVisibly.value;
    };
    const opensize = () => {
      sizeVisibly.value = !sizeVisibly.value;
    };
    const openpassword = () => {
      passwordVisibly.value = !passwordVisibly.value;
    };

    const opentextarea = () => {
      textareaVisibly.value = !textareaVisibly.value;
    };
    return { Prism, routineVisibly, sizeVisibly, passwordVisibly, textareaVisibly, openroutine, opensize, openpassword, opentextarea, Input1DemoD, Input2DemoD, Input3DemoD, Input4DemoD };
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
      margin: 0;
    }
  }
}
</style>