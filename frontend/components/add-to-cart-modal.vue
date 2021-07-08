<template>
  <section :class="`AddToCartModal --${site}`">
    <o-modal :active.sync="isModalActive" :tabindex="isModalActive ? 0 : -1">
      <div class="add-cart-modal">
        <div class="container">
          <header class="add-cart-modal__header">
            <h3 class="add-cart-modal__title heading-h3 --text-uppercase">{{title}}</h3>
            <button class="add-cart-modal__close" @click.stop.prevent="isModalActive = false; $emit('closeModal')">
              <Icon icon-name="close" />
            </button>
          </header>
          <div class="add-cart-modal__content">
            <div class="row">
              <div class="col-12 col-lg-7">
                <CartItem :product="product" :site="site" type="preview" :currency="subtotal.currency"/>
                <div v-if="subtotal" class="add-cart-modal__subtotal-wrapper">
                  <div class="add-cart-modal__subtotal-items-wrapper">
                    <span class="add-cart-modal__subtotal-title">{{subtotal.title}}</span>
                    <span class="add-cart-modal__subtotal-items">{{subtotal.quantity}} {{subtotal.itemsLabel}}</span>
                  </div>
                  <span class="add-cart-modal__subtotal-price">{{subtotal.currency}} {{subtotalPrice}}</span>
                </div>
                <div  class="add-cart-modal__subtotal-actions">
                  <Button class="add-cart-modal__subtotal-action" :ghost="true" variant="red" target="_blank" :label="checkout.label" tag="a" :path="checkout.url" />
                  <Button class="add-cart-modal__subtotal-action" variant="red" target="_blank" :label="cart.label" tag="nuxt-link" :path="cart.url" />
                </div>
              </div>
              <div class="col-12 col-lg-5">
                <div class="add-cart-modal__related">
                  <h3 class="add-cart-modal__related-title heading-h5 --text-uppercase">{{relatedProducts.title}}</h3>
                  <div class="add-cart-modal__related-product" v-for="(related, index) in relatedProducts.products" :key="index" >
                    <CartItem :product="related" :site="site" type="preview-related" :currency="subtotal.currency" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </o-modal>
    <Button v-bind="{...modalButton, isCart: true, price: `${subtotal.currency} ${productPrice}`}" @clicked="isModalActive = true; $emit('addProductToCart')"/>
  </section>
</template>
<script>
import voca from 'voca';
import Button from './atoms/button'
import CartItem from './cart-item'
import Cta from './atoms/cta'
import Icon from './atoms/icon'
export default{
  name: "Modal",
  components: {
    Button,
    CartItem,
    Cta,
    Icon
  },
  props:{
    title: {
      type:String,
      default:'Added to your shopping cart'
    },
    modalButton:{
      type: Object,
      default: () => {}
    },
    product:{
      type: Object,
      default: () => {}
    },
    relatedProducts:{
      type: Object,
      default: () => {}
    },
    subtotal:{
      type: Object,
      default: () => {}
    },
    site: {
      type:String,
      default:'cr'
    },
    checkout:{
      type: Object,
      default: () => {}
    },
    cart:{
      type: Object,
      default: () => {}
    }
  },
  data(){
    return{
      isModalActive: true
    }
  },
  computed:{
    productPrice(){
      return this.product.variants[0].price
    },
    subtotalPrice(){
      return voca.sprintf('%.2f', this.product.variants[0].price * this.subtotal.quantity)
    }
  }
}
</script>
<style lang="scss" scoped >
.AddToCartModal{
  ::v-deep .o-modal{
    &__overlay{
      background-color: rgba($black, 0.12);
      bottom: 0;
      left:0;
      position: fixed;
      right: 0;
      top: 0;
      z-index:199;

      @include media-breakpoint-up(lg){
        background-color: rgba($black, 0.5);
      }
    }

    .add-cart-modal {
      @include flexing(column);
      padding: 1.6rem 0;
      position: fixed;
      width: 100%;
      z-index: 200;
      @include media-breakpoint-up(lg){
        padding: 1.6rem 0;
      }
    }

    &__content{
      padding: 0;
    }
  }

  &.\--cr{
    ::v-deep {

      .col-lg-5{
        background-color: $white;
      }

      .o-modal {
        .add-cart-modal {
        background-color: $background-grey;
        left: auto;
        max-height: 100vh;
        max-width: 75vw;
        overflow-y: auto;
        right: 0;
        top: 0;
        @include media-breakpoint-up(lg) {
          background-color: $white;
          max-width: 100%;
          left: 0;
        }

        &__header {
          @include flexing(row);
          justify-content: space-between;
          margin-bottom: 2.4rem;

          ::v-deep .Icon {
            .inline-svg {
              height: 1rem;
              width: 1rem;
            }
          }
        }

        &__close {
          @include reset-button-style();
          align-items: center;
          @include flexing(row);
          margin: -1rem;
          padding: 1rem;
          @include media-breakpoint-down(lg) {
            left: 1rem;
            position: fixed;
          }
        }

        &__subtotal {
          &-wrapper {
            border-bottom: 1px solid rgba($primary, 0.08);
            border-top: 1px solid rgba($primary, 0.08);
            @include flexing(row);
            justify-content: space-between;
            letter-spacing: 1px;
            margin: 1.2rem 0;
            padding: 0.8rem 0;

            @include media-breakpoint-up(lg) {
              margin: 0.75rem 0 2.4rem;
            }
          }

          &-items-wrapper {
            align-items: center;
            @include flexing(row);
          }

          &-price,
          &-title {
            @include font-size-line-weight(16, 24, 700);

            @include media-breakpoint-up(lg) {
              @include font-size-line-weight(20, 24, 700);
              text-transform: uppercase;
            }
          }

          &-items {
            @include font-size-line-weight(16, 24, 400);
            margin-left: 0.8rem;
          }

          &-actions {
            @include flexing(column);
            padding-bottom: 1.6rem;

            @include media-breakpoint-up(lg) {
              flex-direction: row;
              justify-content: flex-end;
              padding: 0;
            }
          }

          &-action {
            &:not(:last-child) {
              margin-bottom: 1.2rem;
              @include media-breakpoint-up(lg) {
                margin: 0 0.8rem 0 0;
              }
            }
          }

        }

        &__related {
          padding: 1.6rem 0 1.2rem;
          @include media-breakpoint-up(lg){
            padding-: 0 0 0 1.6rem;
          }

          &-title {
            margin-bottom: 0;
          }

          &-product {
            &:not(:last-child) {
              padding: 0.8rem 0;
              border-bottom: 1px solid rgba($primary, 0.08);
            }

            &:last-child {
              padding-top: 0.8rem;
            }
          }
        }
      }
      }
    }

    .add-cart-modal {
      &__close {
        ::v-deep .Icon {
          .inline-svg {
            height: 1rem;
            width: 1rem;
          }
        }
      }
    }
  }

}
</style>
