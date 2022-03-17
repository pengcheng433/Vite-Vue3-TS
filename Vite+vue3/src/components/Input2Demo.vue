<template>
  <div class="mb">
    <Input placeholder="large" size="large"></Input>
  </div>
  <div class="mb">
    <Input placeholder="default"></Input>
  </div>
  <div class="mb">
    <Input placeholder="mini" size="mini"></Input>
  </div>
</template>
<script lang="ts">
import Input from "../lib/Input.vue";
export default {
  components: {
    Input,
  },
  setup() {

  },
};
</script>
<style lang="scss" scoped>
.mb {
  margin-bottom: 10px;
}
</style>