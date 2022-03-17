<template>
  <Input v-model:value="value1" type="textarea" placeholder="请输入文本"></Input>
  <Input v-model:value="value2" type="textarea" :rows="6" placeholder="请输入文本"></Input>
</template>
<script lang="ts">
import { ref } from "vue";
import Input from "../lib/Input.vue";

export default {
  components: {
    Input,
  },
  setup() {
    const value1 = ref<any>("文本框1");
    const value2 = ref<any>("文本框2");


    return { value1, value2};
  },
};
</script>
<style lang="scss" scoped>
.mb {
  margin-bottom: 10px;
}
</style>