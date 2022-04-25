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

    <!-- 九宫格区域 -->
    <div class="wrapper__icons">
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E8%B6%85%E5%B8%82.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">超市便利</p>
      </div>
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E9%B2%9C%E8%8A%B1.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">鲜花</p>
      </div>
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E8%9B%8B%E7%B3%95.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">蛋糕</p>
      </div>
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E8%8F%9C%E5%B8%82%E5%9C%BA.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">菜市场</p>
      </div>
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E7%BA%A2%E5%8C%85.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">红包</p>
      </div>
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E7%AD%BE%E5%88%B0.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">签到</p>
      </div>
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E6%B0%B4%E6%9E%9C%E5%BA%97.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">水果店</p>
      </div>
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E5%AE%B6%E5%B1%85.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">家居</p>
      </div>
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E5%A4%A7%E7%89%8C%E5%85%8D%E8%BF%90.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">大牌免运</p>
      </div>
      <div class="wrapper__icons__item">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/jingdong/%E5%8C%BB%E8%8D%AF%E5%81%A5%E5%BA%B7.png"
          alt=""
          class="wrapper__icons__item__img"
        />
        <p class="wrapper__icons__item__desc">医药健康</p>
      </div>
    </div>

    <!-- 灰条分割 -->
    <div class="wrapper__gap"></div>
  </div>

  <!-- 底部导航栏 -->
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6b8;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item docker__item">
      <div class="iconfont">&#xe601;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item docker__item">
      <div class="iconfont">&#xe600;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item docker__item">
      <div class="iconfont">&#xe78b;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style/index.scss";

/*顶部 */ 
.wrapper {
  overflow-y: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem;
  /*顶部定位和通知 */
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
  /*搜索 */
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
  /*banner */
  &__banner {
    /* hack技巧，预留出高度防抖(图片高/图片宽)*/
    // padding-bottom: 24.4%;
    &__img {
      width: 100%;
    }
  }
  /*九宫格 */
  &__icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;
    &__item {
      width: 20%;
      &__img {
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 auto;
      }
      &__desc {
        margin: 0.06rem 0 0.16rem 0;
        text-align: center;
        color: $content-fontcolor;
      }
    }
  }
  /*灰条分割线 */
  &__gap {
    margin: 0 -0.18rem;
    height: 0.1rem;
    background-color: #f1f1f1;
  }
}

/*底部导航栏 */
.docker {
  display: flex;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  height: 0.49rem;
  border: 0.01rem solid #f1f1f1;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: $highlight-color;
    }
  }
  &__tittle {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}

</style>
