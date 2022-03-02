<template>
  <h1>Button 组件示例</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Button1Demo />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre
        class="language-html"
        v-html="Prism.highlight(Button1DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>

  <div class="demo">
    <h2>大小与类型</h2>
    <div class="demo-component">
      <Button2Demo />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre
        class="language-html"
        v-html="Prism.highlight(Button2DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>

  <div class="demo">
    <h2>禁用状态与加载中</h2>
    <div class="demo-component">
      <Button3Demo />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre
        class="language-html"
        v-html="Prism.highlight(Button3DemoD, Prism.languages.html, 'html')"
      ></pre>
    </div>
  </div>

 
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import Button1Demo from "./Button1Demo.vue";
import Button1DemoD from "./Button1Demo.vue?raw";
import Button2Demo from "./Button2Demo.vue";
import Button2DemoD from "./Button2Demo.vue?raw";
import Button3Demo from "./Button3Demo.vue";
import Button3DemoD from "./Button3Demo.vue?raw";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
const Prism = (window as any).Prism;
export default {
  components: { Button, Button1Demo, Button2Demo, Button3Demo },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick, Button1DemoD, Button2DemoD, Button3DemoD, Prism };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
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