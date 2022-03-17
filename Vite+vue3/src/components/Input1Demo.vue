<template>
  <Input v-model:value="value" placeholder="请输入"></Input>
</template>
<script lang="ts">
import Input from "../lib/Input.vue";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Input,
  },
  setup() {
    const value = ref<any>("默认文本值");
 
    return { value,   };
  },
};
</script>
