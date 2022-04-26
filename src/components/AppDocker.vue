<template>
  <!-- 底部导航栏 -->
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :key="index"
      :class="{
        docker__item: true,
        'docker__item--active': index === currentIndex,
      }"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDocker",
  props: ["currentIndex"],
  setup() {
    const dockerList = [
      {
        icon: "&#xe6b8;",
        text: "首页",
        to: { name: "HomePage" },
      },
      {
        icon: "&#xe600;",
        text: "购物车",
        to: { name: "CartPage" },
      },
      {
        icon: "&#xe601;",
        text: "订单",
        to: { name: "OrderPage" },
      },
      {
        icon: "&#xe78b;",
        text: "我的",
        to: { name: "PersonalPage" },
      },
    ];
    return { dockerList };
  },
};
</script>

<style lang="scss" scoped>
@import '../style/virables.scss';
/*底部导航栏 */
.docker {
  display: flex;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  height: 0.49rem;
  border: 0.01rem solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      a {
        color: #1fa4fc;
      }
    }
  }
  &__tittle {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
