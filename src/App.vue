<template>
  <!-- 顶部 -->
  <div class="wrapper">
    <!-- 顶部定位栏和消息通知 -->
    <div class="wrapper__position">
      <span class="iconfont">&#xe64c;</span>
      南京工业职业技术大学计算机与软件学院软件2176
      <span class="iconfont position__notice">&#xe60a;</span>
    </div>
    <!-- 搜索栏 -->
    <div class="wrapper__search">
      <span class="iconfont">&#xe6e1;</span>
      <span class="search__text">优惠商品</span>
    </div>
    <!-- banner -->
    <div class="wrapper__banner">
      <img
        src="https://pic-go.oss-cn-shanghai.aliyuncs.com/typora-img/202204251437622.jpeg"
        class="wrapper__banner__img"
      />
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
  &__search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    border-radius: 0.16rem;
    background-color: $background-color;
    color: $placeholder-color;
    .iconfont {
      display: inline-block;
      padding: 0 0.12rem 0 0.16rem;
      font-size: 0.2rem;
    }
    &__text {
      display: inline-block;
      font-size: 0.14rem;
    }
  }
  &__banner {
    /* hack技巧，预留出高度防抖(图片高/图片宽)*/
    // padding-bottom: 24.4%;
    &__img {
      width: 100%;
    }
  }
}
</style>
