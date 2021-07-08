<template>
  <div v-if="variant"
       :class="`CartItem --${site} --${type}`"
       itemscope
       itemtype="https://schema.org/Product">
    <div class="cart-item__wrapper">
      <a class="cart-item__url"  itemprop="url" :href="product.url">
        <figure class="cart-item__wrapper-image">
          <img class="cart-item__image" itemprop="image" :src="productImage" :alt="product.title" />
        </figure>
      </a>
      <div class="cart-item__content">
        <div class="cart-item__header --text-uppercase">
          <a class="cart-item__url" itemprop="url" :href="product.url">
            <h3 :class="{'cart-item__title': true, 'heading-h5': type==='preview'}" itemprop="name">{{product.title}}</h3>
          </a>
          <span
            v-if="type ==='preview' || breakpoints.isDesktop"
            :class="{'cart-item__price': true, 'heading-h5': type==='preview'}"
            itemprop="price">
            {{currency}} {{variant.price}}
          </span>
        </div>
        <div class="cart-item__options">
          <span class="cart-item__option" v-for="(option, index) in variant.title.split('/')" :key="index">{{option}}</span>
        </div>
        <div v-if="type==='cart'" class="cart-item__actions">
          <QuantityInput ref="quantity" class="cart-item__action" :site="site" @changed="$emit('updateQuantity')" />
          <span
              class="cart-item__action price"
              v-if="type!=='preview-related' && breakpoints.isMobile"
              :class="{'cart-item__price': true, 'heading-h5': type==='preview'}"
              itemprop="price">
            {{currency}} {{variant.price}}
          </span>
          <Cta class="cart-item__action" :label="favoritesLabel" color="black" @clicked="$emit('addToFavorites', product.id, product.product_id)" tag="button"/>
          <Cta class="cart-item__action" :label="removeLabel" color="black" @clicked="$emit('removeFromCart',product.id, product.product_id)" tag="button" />
        </div>
        <div v-if="type==='preview-related'" class="cart-item__add">
          <Button variant="black" :ghost="true" :label="addLabel"  @clicked="$emit('addToCart',product.id, product.product_id)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
import Breakpoints from '../composables/breakpoints'
import QuantityInput from './atoms/forms/quantity'
import Button from './atoms/button'
import Cta from './atoms/cta'
export default {
  name:'CartItem',
  components:{
    Button,
    Cta,
    QuantityInput
  },
  setup () {
    if (process.server)
      return { breakpoints: {} }

    const { breakpoints } = Breakpoints()
    return{
      breakpoints
    }
  },
  props:{
    site:{
      type: String,
      default: 'cr'
    },
    type:{
      type: String,
      default: 'cart'
    },
    currency:{
      type: String,
      default: '€'
    },
    product:{
      type:Object,
      default: ()=> ({})
    },
    favoritesLabel:{
      type: String,
      default: 'move to favorites'
    },
    removeLabel:{
      type: String,
      default: 'Remove'
    },
    addLabel:{
      type: String,
      default: 'add to cart'
    }
  },
  computed: {
    productImage(){
      const image = this.product.images?.filter(image => image.id === this.product.variants[0].image_id)
      return image && image.length ? image[0].src : ''
    },
    variant(){
      return this.product.variants.length ? this.product.variants[0] : null
    }
  }
}
</script>
<style lang="scss" scoped>
.CartItem{
  &.\--cr{
    .cart-item{
      &__wrapper{
        @include flexing(column);
        @include media-breakpoint-up(lg){
          flex-direction: row;
        }
        &-image{
          background: $white;
          overflow: hidden;
        }
      }
      &__header{
        @include flexing(row);
        justify-content: space-between;
        margin-bottom:0.4rem;
      }

      &__url{
        display: block;
        text-decoration: none;
      }

      &__image{
        height:100%;
        object-fit: contain;
        object-position: center;
        width: 100%;
      }

      &__option{
        display: block;
        letter-spacing: 1px;
      }

      &__content{
        flex: 1;
      }

      &__title{
        margin-bottom:0
      }
    }

    &.\--preview{
      .cart-item{
        &__content{
          flex: 1;
        }
        &__wrapper{
          &-image{
            height: 6.4rem;
            margin: 0 0 1.2rem -#{$grid-gutter-width / 2};
            max-width: 7.4rem;
            @include media-breakpoint-up(lg){
              height: 9.4rem;
              margin: 0  1.6rem 0 0;
              max-width: 12.65rem;
            }
          }
        }
        &__option{
          @include font-size-line-weight(14, 20, 400);

          @include media-breakpoint-up(lg) {
            @include font-size-line-weight(16, 24, 400);
          }
        }
      }
    }

    &.\--cart{
      .cart-item{
        &__wrapper{
          flex-direction: row;
          @include media-breakpoint-up(lg){
            align-items: center;
            padding-right: 0.8rem;
          }
          &-image{
            height: 9.6rem;
            margin: 0  0.8rem 0 0;
            max-width: 8.2rem;
            @include media-breakpoint-up(lg){
              height: 14rem;
              margin: 0  1.2rem 0 0;
              max-width: 16rem;
            }
          }
        }
        &__option{
          @include font-size-line-weight(14,20,400);
        }

        &__title,
        &__price{
          @include font-size-line-weight(16,24,700);
        }

        &__action{
          margin-top: 0.8rem;
        }

        &__action:not(.QuantityInput){
          display: block;
          letter-spacing: 1px;
          text-align: left;
          text-transform: uppercase;
        }

        &__action:not(.price){
          @include font-size-line-weight(12,16,700);
        }

        &__header{
          @include media-breakpoint-down(lg){
            flex-direction: column;
          }
        }
      }
    }

    &.\--preview-related{
      text-align: center;

      @include media-breakpoint-up(lg){
        text-align: left;
      }

      .cart-item {
        &__wrapper {
          &-image {
            height: 10.4rem;
            margin: 0 auto;
            max-width: 100%;
            @include media-breakpoint-up(lg){
              height: 6.7rem;
              margin: 0 0.8rem 0 0;
              max-width: 8.8rem;
            }
          }
        }

        &__header{
          @include media-breakpoint-down(lg){
            justify-content: center;
          }
        }

        &__option{
          display: inline;
          &:not(:first-child):before {
            content: ' - ';
          }
        }

        &__add{
          margin-top: 0.8rem;
          text-align: center;
          @include media-breakpoint-up(lg){
            margin-top: 2.3rem;
            text-align: right;
          }
          ::v-deep{
            .o-btn{
              width: 100%;
              @include media-breakpoint-up(lg){
                width: auto;
              }
            }
          }
        }
      }
    }
  }
}
</style>
