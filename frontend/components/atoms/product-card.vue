<template>
  <div :class="{
        'ProductCard': true,
        '--cr': site === 'cr',
        '--pl' : site === 'pl',
        '--hover': hovered  && !breakpoints.isMobile,
        '--full-background' : fullBackground.length
      }"
       itemscope
       itemtype="https://schema.org/Product"
       @mouseover="hovered=true"
       @mouseleave="hovered= false"
    >
    <div v-if="fullBackground.length" class="product-card__full-background">
      <img class="product-card__full-background-image" :src="fullBackground" />
      <div class="product-card__full-background-content">
        <span class="product-card__full-background-title">{{product.title}}</span>
        <span class="product-card__full-background-colors-counter">
          {{product.colors.length}} {{colorLabel}}
        </span>
      </div>
    </div>

    <div class="product-card__wrapper">
      <a class="product-card__url" :href="product.url" />
      <div class="product-card__top">
        <ProductLike class="product-card__like" />
        <img v-if="hovered && !breakpoints.isMobile" itemprop="image" :src="product.colors[hovered ? currentColor : startItem].hoveredImage" :alt="product.title" class="product-card__img-hover" />
        <img v-else-if="!fullBackground.length" itemprop="image" :src="product.colors[hovered ? currentColor : startItem].image" :alt="product.title" class="product-card__img" />
        <Badge v-if="product.label" :label="product.label" class="product-card__badge" />
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
          <span v-if="!hovered"  class="product-card__currency">{{startPriceLabel}}</span>
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
import Breakpoints from '../../composables/breakpoints'
import Badge from './badge';
import FlickitySlider from './flickity-slider'
import ProductLike from './product/like'
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
    fullBackground:{
      type: String,
      default: ''
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
      return this.product.colors?.map(item => item.default).indexOf(true) >= 0 ? this.product.colors?.map(item => item.default).indexOf(true) : 0
    }
  }
}
</script>
<style lang="scss" scoped>
.ProductCard{
  &.\--cr{
    max-height: 12rem;
    min-height: 12rem;
    overflow: visible;
    position: relative;
    @include media-breakpoint-up(lg){
      max-height: 17rem;
      min-height: 17rem;
    }

    .product-card{
      &__wrapper{
        background-color: $white;
        border: 1px solid transparent;
        padding: 0 0.4rem 0.4rem;
        position: relative;
        z-index:-1;
        transition: all 0.1s ease-in-out;
        @include media-breakpoint-up(lg){
          padding: 0 0.8rem 0.8rem;
        }
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
        min-height: 8.5rem;
        position: relative;
        width: 100%;
        @include media-breakpoint-up(lg){
          min-height: 13.9rem;
        }
      }

      &__badge{
        left: 50%;
        position: absolute;
        bottom: 0;
        transform: translate3d(-50%, 0, 0);
        width: 100%;
        @include media-breakpoint-up(lg){
          top: 0.8rem;
        }
      }

      &__like{
        position: absolute;
        right: 0.4rem;
        top: 0.8rem;
        z-index:20;
        @include media-breakpoint-up(lg){
          right: 0.8rem;
        }

      }

      &__img-hover,
      &__img{
        height: 8.5rem;
        max-height: 8.5rem;
        object-fit: contain;
        object-position: center;
        width: 100%;
        @include media-breakpoint-up(lg){
          height: 13.9rem;
          max-height: 13.9rem;
        }

      }

      &__content-wrapper{
        text-align: center;
      }

      &__colors-counter{
        color: $grey;
        display: block;
        @include font-size-line-weight(14,20,400);
        letter-spacing: 1px;
        margin-top: 0.4rem;
        text-transform: uppercase;
        @include media-breakpoint-up(lg){
          margin-top: 0;
        }
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

    &.\--full-background{
      .product-card{
        &__wrapper{
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
        }

        &__full-background{
          @include flexing(column);
          height: 100%;
          justify-content: flex-end;
          max-height: 340px;
          padding: 0.8rem;
          position: absolute;
          width: 100%;
          z-index:1;

          &-image{
            bottom: 0;
            height: 100%;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
          }

          &-content{
            color: $white;
            letter-spacing: 1px;
            position: relative;
            text-transform: uppercase;
            z-index:2;
          }

          &-title{
            display: block;
            @include font-size-line-weight(18,14,700);
            margin-bottom: 0.2rem;
          }

          &-colors-counter{
            @include font-size-line-weight(14,20,400);
          }
        }
      }
      &.\--hover{
        .product-card{
          &__wrapper{
            opacity: 1;
          }
        }
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
