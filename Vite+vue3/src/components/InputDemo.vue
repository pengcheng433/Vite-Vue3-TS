<template>
  <h1>输入框组件示例</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Input v-model:value="value" placeholder="请输入"></Input>
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
    <h2>常规用法</h2>
    <div class="demo-component">
      <Input v-model:value="value" placeholder="请输入" size="big"></Input>
      <br />
      <Input v-model:value="value" placeholder="请输入" size="noraml"></Input>
      <br />

      <Input v-model:value="value" placeholder="请输入" size="small"></Input>
    </div>
    <div class="demo-actions"></div>
    <div class="demo-code"></div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import Input from "../lib/Input.vue";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Button,
    Input,
  },
  setup() {
    const value = ref<any>("默认文本值");
    const routineVisibly = ref(false);
    const openroutine = () => {
      routineVisibly.value = !routineVisibly.value;
    };
    return { value, openroutine, openroutine };
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