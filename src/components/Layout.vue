<template>
  <div class="layout">
    <button @click="handleToHome">to home</button>
    <button @click="handleToScenes">to scenes</button>
    <!-- <Test /> -->
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
// import Test from './Test.vue';

export default defineComponent({
  components: {
    // Test,
  },
  setup() {
    const router = useRouter();
    const handleToHome = () => {
      router.push('/')
    };
    const handleToScenes = () => {
      router.push('/scenes');
    }
    return {
      handleToHome,
      handleToScenes,
    };
  },
});
</script>
<style lang='less' scoped>
</style>

