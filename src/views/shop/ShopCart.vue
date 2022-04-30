<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          src="https://pic-go.oss-cn-shanghai.aliyuncs.com/typora-img/202204281208038.jpg"
          class="check__icon__img"
        />
        <div class="check__icon__tag">{{ total(shopId) }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info_price">{{ price(shopId) }}</span>
      </div>
      <div
        class="check__btn"
        v-show="total(shopId) > 0"
        @click="() => handleShowConfirmChange(true)"
      >
        去结算
      </div>
    </div>
  </div>
  <div
    class="mask"
    v-show="showConfirm"
    @click="() => handleShowConfirmChange(false)"
  >
    <div class="mask__content" @click.stop>
      <h3 class="mask__content__title">确认要离开？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="() => handleShowConfirmChange(false)"
        >
          取消订单
        </div>
        <div
          class="mask__content__btn mask__content__btn--last"
          @click="handleConfirmOrder"
        >
          确认支付
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { post } from '../../utils/request'
const route = useRoute()
const store = useStore()
const shopId = ref(route.params.id)
const cartList = store.state.cartList
const total = (shopId) => {
  return cartList?.[shopId]?.total?.total || 0
}
const price = (shopId) => {
  return cartList?.[shopId]?.total?.price || 0
}

const showConfirm = ref(false)
const handleShowConfirmChange = (status) => {
  showConfirm.value = status
}
const router = useRouter()
const productList = cartList[shopId]?.productList

const handleConfirmOrder = async () => {
  const result = await post('/order', {
    shopId,
    productList
  })
  console.log(result)
  if (result?.code === 200) {
    store.commit('clearCartData', shopId.value)
    router.push({ name: 'OrderPage' })
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/virables.scss';
@import '../../style/mixins.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  background-color: $bgColor;
}
.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      right: 0.2rem;
      top: 0.04rem;
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: $hightlight-fontColor;
      border-radius: 50%;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: 0.12rem;
    &__price {
      line-height: 0.49rem;
      color: $hightlight-fontColor;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: $btn-bgColor;
    text-align: center;
    font-size: 0.14rem;
    color: $bgColor;
  }
}
.mask {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: $bgColor;
    text-align: center;
    border-radius: 0.04rem;
    &__title {
      margin: 0.24rem 0 0 0;
      line-height: 0.26rem;
      font-size: 0.18rem;
      color: $content-fontcolor;
    }
    &__desc {
      margin: 0.08rem 0 0 0;
      font-size: 0.14rem;
      color: $medium-fontColor;
    }
    &__btns {
      display: flex;
      margin: 0.24rem 0.58rem;
    }
    &__btn {
      flex: 1;
      width: 0.8rem;
      line-height: 0.32rem;
      border-radius: 0.16rem;
      font-size: 0.14rem;
      &--first {
        margin-right: 0.12rem;
        border: 0.01rem solid $btn-bgColor;
        color: $btn-bgColor;
      }
      &--last {
        margin-left: 0.12rem;
        background: $btn-bgColor;
        color: #fff;
      }
    }
  }
}
</style>
