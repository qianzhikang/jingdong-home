<template>
  <div class="wrapper">
    <StaticPart />
    <NearbyShop />
  </div>
  <AppDocker :currentIndex="0" />
</template>
<script>
import StaticPart from "./StaticPart.vue";
import NearbyShop from "./NearbyShop.vue"
import AppDocker from "../../components/AppDocker.vue";
export default {
  name: "HomePage",
  components: { StaticPart, NearbyShop,AppDocker },
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 10px;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.1rem 0.18rem;
}
</style>
