<template>
  <h1>Dialog组件示例</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Dialog1Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!routineVisibly" @click="openroutine">查看代码</Button>
      <Button v-else @click="openroutine">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-if="routineVisibly"
        class="language-html"
        v-html="Prism.highlight(Dialog1DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>
  <div class="demo">
    <h2>插槽用法</h2>
    <div class="demo-component">
      <Dialog2Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!slotVisibly" @click="openslot">查看代码</Button>
      <Button v-else @click="openslot">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-if="slotVisibly"
        class="language-html"
        v-html="Prism.highlight(Dialog2DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>
  <div class="demo">
    <h2>遮盖层设置</h2>
    <div class="demo-component">
      <Dialog3Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!coverVisibly" @click="opencover">查看代码</Button>
      <Button v-else @click="opencover">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-if="coverVisibly"
        class="language-html"
        v-html="Prism.highlight(Dialog3DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>
  <div class="demo">
    <h2>函数启动对话框</h2>
    <div class="demo-component">
      <Dialog4Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!functionVisibly" @click="openfunction">查看代码</Button>
      <Button v-else @click="openfunction">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-if="functionVisibly"
        class="language-html"
        v-html="Prism.highlight(Dialog4DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>

  <div class="demo">
    <h2>嵌套对话框</h2>
    <div class="demo-component">
      <Dialog5Demo />
    </div>
    <div class="demo-actions">
      <Button v-if="!nestVisibly" @click="opennest">查看代码</Button>
      <Button v-else @click="opennest">隐藏代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-if="nestVisibly"
        class="language-html"
        v-html="Prism.highlight(Dialog5DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import Dialog1Demo from "./Dialog1Demo.vue";
import Dialog1DemoD from "./Dialog1Demo.vue?raw";
import Dialog2Demo from "./Dialog2Demo.vue";
import Dialog2DemoD from "./Dialog2Demo.vue?raw";
import Dialog3Demo from "./Dialog3Demo.vue";
import Dialog3DemoD from "./Dialog3Demo.vue?raw";
import Dialog4Demo from "./Dialog4Demo.vue";
import Dialog4DemoD from "./Dialog4Demo.vue?raw";
import Dialog5Demo from "./Dialog5Demo.vue";
import Dialog5DemoD from "./Dialog5Demo.vue?raw";

import "prismjs/themes/prism-okaidia.css";
const Prism = (window as any).Prism;
import "prismjs";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Button,
    Dialog,
    Dialog1Demo,
    Dialog2Demo,
    Dialog3Demo,
    Dialog4Demo,
    Dialog5Demo,
  },
  setup() {
    const routineVisibly = ref(true);
    const slotVisibly = ref(false);
    const coverVisibly = ref(false);
    const functionVisibly = ref(false);
    const nestVisibly = ref(false);

    const openroutine = () => {
      routineVisibly.value = !routineVisibly.value;
    };
    const openslot = () => {
      slotVisibly.value = !slotVisibly.value;
    };
    const opencover = () => {
      coverVisibly.value = !coverVisibly.value;
    };
    const openfunction = () => {
      functionVisibly.value = !functionVisibly.value;
    };
    const opennest = () => {
      nestVisibly.value = !nestVisibly.value;
    };
    return {
      Prism,
      Dialog1DemoD,
      Dialog2DemoD,
      Dialog3DemoD,
      Dialog4DemoD,
      Dialog5DemoD,
      routineVisibly,
      slotVisibly,
      coverVisibly,
      functionVisibly,
      nestVisibly,
      openroutine,
      openslot,
      opencover,
      openfunction,
      opennest,
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