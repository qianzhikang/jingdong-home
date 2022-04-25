<template>
  <!-- 顶部 -->
  <div class="wrapper">
    <!-- 顶部定位栏和消息通知 -->
    <div class="wrapper__position">
      <span class="iconfont">&#xe64c;</span>
      南京工业职业技术大学计算机与软件学院软件2176
      <span class="iconfont position__notice">&#xe60a;</span>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style/index.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem;
  &__position {
    position: relative;
    padding: 0.16rem 0.16rem 0.16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    // 文字截断
    @include ellipsis;
    .iconfont {
      font-size: 0.2rem;
    }
    .position__notice {
      position: absolute;
      right: 0;
    }
    color: $content-fontcolor;
  }
}
</style>
