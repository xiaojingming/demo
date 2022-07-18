<template>
  <div class="layout">
    <button @click="handleToHome">to home</button>
    <button @click="handleToScenes">to scenes</button>
    <van-icon
      name="arrow"
      color="#ccc"
    />
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
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

