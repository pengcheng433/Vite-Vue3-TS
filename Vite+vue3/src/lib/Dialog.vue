<template>
  <template v-if="visibly">
    <Teleport to="body">
      <div
        class="ui-dialog-overlay"
        @click="closeOnClickOverlay == false ? close() : false"
      ></div>
      <div class="ui-dialog-wrapper">
        <div class="ui-dialog">
          <header>
            <slot name="title"> 标题 </slot>
            <span @click="close" class="ui-dialog-close"></span>
          </header>
          <main>
            <slot name="main">
              <p>默认插槽内容1</p>
              <p>默认插槽内容2</p>
            </slot>
          </main>
          <footer>
            <Button @click="OK" level="main">OK</Button>
            <Button @click="CANCEL">CANCEL</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>


<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
  props: {
    visibly: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    OK: {
      type: Function,
    },
    CANCEL: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visibly", false);
    };

    const OK = () => {
      props.OK();
      close();
    };
    const CANCEL = () => {
      context.emit("CANCEL");
      props.CANCEL();
      close();
    };

    return { close, OK, CANCEL };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.ui-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>