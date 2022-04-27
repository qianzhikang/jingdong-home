<template>
  <h2>购物车</h2>
  <AppDocker :currentIndex="1" />
</template>
<script>
import AppDocker from '../../components/AppDocker.vue'
export default {
  name: 'CartPage',
  components: {
    AppDocker
  }
}
</script>
<style scoped lang="scss"></style>
