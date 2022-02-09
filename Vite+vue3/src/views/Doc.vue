<template>
  <div>
   <Topnav />
    <div class="content">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">tabs 组件</router-link>
          </li>
         

        </ol>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style>

</style>