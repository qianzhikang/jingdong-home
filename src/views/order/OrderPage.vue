<template>
  <h2>订单</h2>
  <AppDocker :currentIndex="2" />
</template>
<script>
import AppDocker from '../../components/AppDocker.vue'
export default {
  name: 'OrderPage',
  components: {
    AppDocker
  }
}
</script>
<style scoped lang="scss"></style>
