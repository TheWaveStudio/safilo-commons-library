<template>
  <div :class="{
        'ProductCard': true,
        '--cr': site === 'cr',
        '--pl' : site === 'pl',
        '--hover': hovered  && !breakpoints.isMobile
      }"
       itemscope
       itemtype="https://schema.org/Product"
       @mouseover="hovered=true"
       @mouseleave="hovered= false"
    >
<!--    {{breakpoints}}-->
    <div class="product-card__wrapper">
      <a class="product-card__url" :href="product.url" />
      <div class="product-card__top">
        <Badge v-if="product.label" :label="product.label" class="product-card__badge" />
        <ProductLike class="product-card__like" />
        <img v-if="hovered && !breakpoints.isMobile" itemprop="image" :src="product.colors[hovered ? currentColor : startItem].hoveredImage" :alt="product.title" class="product-card__img-hover" />
        <img v-else itemprop="image" :src="product.colors[hovered ? currentColor : startItem].image" :alt="product.title" class="product-card__img" />
      </div>
      <div v-if="hovered  && !breakpoints.isMobile" class="product-card__colors-slider">
        <FlickitySlider ref="colorSlider"
                        :activation-limit="4"
                        :items-number="product.colors.length"
                        :flickity-options="{
                          cellAlign: 'left',
                          cellSelector: '.product-card__slider-item',
                          draggable: true,
                          pageDots: false,
                          prevNextButtons: true,
                          wrapAround: true
                        }">
          <button v-for="(color,index) in product.colors" :key="index"
                  :class="{'product-card__slider-item': true, '--selected': currentColor === index}"
                  @click="currentColor = index">
            <figure class="product-card__slider-image-wrapper">
              <img  :src="color.image" :alt="product.title" class="product-card__slider-img"/>
            </figure>
          </button>
        </FlickitySlider>
      </div>
      <div class="product-card__content-wrapper">
        <span v-if="hovered && !breakpoints.isMobile" class="product-card__title">{{product.title}}</span>
        <span v-else class="product-card__colors-counter">
          {{product.colors.length}} {{colorLabel}}
        </span>
        <div class="product-card__started-price">
          <span v-if="!hovered && !breakpoints.isMobile"  class="product-card__currency">{{startPriceLabel}}</span>
          <span class="product-card__currency">{{currency}}</span>
          <span v-if="hovered && !breakpoints.isMobile" class="product-card__price">{{product.colors[currentColor].price}}</span>
          <span v-else class="product-card__price">{{lowerPrice}}</span>
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
import Badge from './atoms/badge';
import FlickitySlider from './atoms/flickity-slider'
import ProductLike from './atoms/product/like'
export default{
  name:'ProductCard',
  components:{
    Badge,
    FlickitySlider,
    ProductLike
  },
  data(){
    return{
      hovered: false,
      currentColor: this.defaultItem(),
    }
  },
  setup () {
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
    colorLabel:{
      type: String,
      default: 'colors'
    },
    currency:{
      type: String,
      default: '€'
    },
    startPriceLabel:{
      type: String,
      default: 'from'
    },
    product:{
      type: Object,
      default: ()=>({})
    }
  },
  computed: {
    lowerPrice(){
      return this.product.colors.reduce((min,value) => {
        return parseFloat(value.price) < min ? value.price : min
      }, 99999999)
    },
    startItem(){
      return this.defaultItem();
    }
  },
  methods: {
    defaultItem() {
      return this.product.colors.map(item => item.default).indexOf(true) >= 0 ? this.product.colors.map(item => item.default).indexOf(true) : 0
    }
  }
}
</script>
<style lang="scss" scoped>
.ProductCard{
  &.\--cr{
    width: 320px;
    max-height: 340px;
    overflow: visible;

    .product-card{
      &__wrapper{
        background-color: $white;
        border: 1px solid transparent;
        padding: 0.8rem;
        position: relative;
        z-index:-1;
        transition: border-color 0.1s ease-in-out;
      }

      &__url{
        bottom: 0;
        display: block;
        left:0;
        position: absolute;
        right: 0;
        top: 0;
        z-index:20;
      }
      &__top{
        position: relative;
        width: 100%;
      }

      &__badge{
        left: 50%;
        position: absolute;
        top: 0.8rem;
        transform: translate3d(-50%, 0, 0);
      }

      &__like{
        position: absolute;
        right: 0.8rem;
        top: 0.8rem;
        z-index:20;
      }

      &__img-hover,
      &__img{
        height: 13.9rem;
        max-height: 13.9rem;
        object-fit: contain;
        object-position: center;
        width: 100%;
      }

      &__content-wrapper{
        text-align: center;
      }

      &__colors-counter{
        color: $grey;
        display: block;
        @include font-size-line-weight(14,20,400);
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      &__title{
        color: $primary;
        display: block;
        @include font-size-line-weight(16,24,700);
        letter-spacing: 1px;
        margin-top: 1rem;
        text-transform: uppercase;
      }

      &__started-price{
        color: $primary;
        @include font-size-line-weight(16,24,400);
        letter-spacing: 1px;
      }

      &__colors-slider{
        border-bottom: 1px solid rgba($primary, 0.12);
        border-top: 1px solid rgba($primary, 0.12);
        position: relative;
      }
      &__slider {
        &-item {
          @include reset-button-style();
          padding: 0;
          border-bottom: 2px solid transparent;
          width: 25%;
          &.\--selected{
            border-color: $secondary;
          }
        }
        &-image-wrapper{
          height: 3.2rem;
          margin-bottom: 0;
          padding: 0.4rem;
          width:100%;
        }
        &-img{
          height: 100%;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
      }
    }
    &.\--hover{
      .product-card__wrapper{
        border-color: $primary;
        z-index:10;
      }
    }
    ::v-deep{
      .FlickitySlider{
        height: 3.2rem;
        padding: 0 1.6rem;
        z-index:20;
      }
      .flickity{
        &-button{
          @include reset-button-style();
          height: 1.2rem;
          padding: 0;
          position: absolute;
          width: 1.2rem;
          z-index: 20;

          &.previous{
            left:0;
          }

          &.next{
            right:0;
          }
        }
      }
    }
  }
}
</style>
