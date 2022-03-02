
<template>
  <Switch v-model:value="bool1" loading />
  <br/>
  <Switch v-model:value="bool2" loading />
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool1 = ref(false);
    const bool2 = ref(true);
    return {
      bool1,
      bool2,
    };
  },
};
</script>