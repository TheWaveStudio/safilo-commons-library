<template>
  <div v-if="variant" :class="`CartItem --${site} --${type}`">
    <div class="cart-item__wrapper">
      <figure class="cart-item__wrapper-image">
        <img class="cart-item__image" :src="productImage" :alt="product.title" />
      </figure>
      <div class="cart-item__content">
        <div class="cart-item__header --text-uppercase">
          <h3 :class="{'cart-item__title': true, 'heading-h5': type==='preview'}">{{product.title}}</h3>
          <span v-if="type!=='preview-related'" :class="{'cart-item__price': true, 'heading-h5': type==='preview'}">{{currency}} {{variant.price}}</span>
        </div>
        <div class="cart-item__options">
          <span class="cart-item__option" v-for="(option, index) in variant.title.split('/')" :key="index">{{option}}</span>
        </div>
        <div v-if="type==='cart'" class="cart-item__actions">
          <QuantityInput ref="quantity" class="cart-item__action" :site="site" @changed="$emit('updateQuantity')" />
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
        @include flexing(row);
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
            height: 9.4rem;
            margin: 0  1.6rem 0 0;
            max-width: 12.65rem;
          }
        }
        &__option{
          @include font-size-line-weight(16,24,400);
        }
      }
    }

    &.\--cart{
      .cart-item{
        &__wrapper{
          align-items: center;
          padding-right: 0.8rem;
          &-image{
            height: 14rem;
            margin: 0  1.2rem 0 0;
            max-width: 16rem;
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
          @include font-size-line-weight(12,16,700);
          letter-spacing: 1px;
          text-align: left;
          text-transform: uppercase;
        }
      }
    }

    &.\--preview-related{
      .cart-item {
        &__wrapper {
          &-image {
            height: 6.7rem;
            margin: 0 0.8rem 0 0;
            max-width: 8.8rem;
          }
        }
        &__option{
          display: inline;
          &:not(:first-child):before {
            content: ' - ';
          }
        }
        &__add{
          margin-top: 2.3rem;
          text-align: right;
        }
      }
    }
  }
}
</style>
