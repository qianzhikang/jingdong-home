<template>
    <h2>我的</h2>
    <AppDocker :currentIndex="3"/>
</template>
<script>
import AppDocker from '../../components/AppDocker.vue'
export default {
    name: 'PersonalPage',
    components:{
        AppDocker
    }
}
</script>

<style scoped lang="scss"></style>