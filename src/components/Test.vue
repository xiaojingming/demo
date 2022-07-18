<template>
  <ul>
    <li
      v-for="item in list"
      :key="item.path"
    >
      {{ item.meta.title }}
    </li>
  </ul> 
</template>
<script>
import { defineComponent, ref } from 'vue';
import { routes } from '../router/router';

export default defineComponent({
  setup() {
    const list = ref(routes.filter((route) => route?.meta?.hasBar));
    return {
      list,
    };
  },
});
</script>
<style lang='less' scoped>
</style>
