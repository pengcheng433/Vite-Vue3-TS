<template>
  <Input v-model:value="value" show-password placeholder="请输入密码"></Input>
</template>
<script lang="ts">
import { ref } from "vue";
import Input from "../lib/Input.vue";

export default {
  components: {
    Input,
  },
  setup() {
    const value = ref<any>("123456");


    return { value, };
  },
};
</script>
<style lang="scss" scoped>
.mb {
  margin-bottom: 10px;
}
</style>