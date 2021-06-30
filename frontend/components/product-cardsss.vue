<template>
  <div :class="{
        'ProductCard': true,
        '--cr': site === 'cr',
        '--pl' : site === 'pl',
        '--hover': hovered
      }"
       itemscope
       itemtype="https://schema.org/Product"
       @mouseover="hovered=true"
       @mouseleave="hovered= false"
    >
    <div class="product-card__wrapper">
      <Badge v-if="product.label" :label="product.label" class="product-card__badge" />
      <ProductLike class="product-card__like" />
      <FlickitySlider class="product-card__slider-main"
                      :activation-limit="1"
                      :items-number="product.colors.length"
                      :flickity-options="{
                        cellAlign: 'left',
                        cellSelector: '.product-card__slider-main-item',
                        draggable: false,
                        pageDots: false,
                        prevNextButtons: false,
                        wrapAround: true
                      }">
        <div class="product-card__slider-main-item'">
          <img v-if="hovered" itemprop="image" :src="defaultColor.hoveredImage" :alt="product.title" class="product-card__img-hover" />
          <img v-else itemprop="image" :src="defaultColor.image" :alt="product.title" class="product-card__img" />
        </div>
      </FlickitySlider>
    </div>
    <div class="product-card__colors-wrapper">
      <FlickitySlider class="product-card__colors-slider"
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
        <figure v-for="(color,index) in product.colors" :key="index" class="product-card__slider-item">
          <img  :src="color.image" :alt="product.title" class="product-card__slider-img"/>
        </figure>
      </FlickitySlider>
    </div>
    <div class="product-card__content-wrapper">
      <span class="product-card__colors-counter">{{product.colors.length}} {{color}}</span>
      <div class="product-card__started-price">
        {{startPriceLabel}}
        <span class="product-card__currency">{{currency}}</span>
        <span class="product-card__price">{{defaultColor.price}}</span>
      </div>
    </div>
  </div>
</template>
<script>
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
      hovered: false
    }
  },
  computed: {
    defaultColor(){
     const defaultColor = this.product.colors.filter(item => item.default);
     return defaultColor.length ? defaultColor[0] : this.product.colors[0]
    }
  },
  props:{
    site:{
      type: String,
      default: 'cr'
    },
    color:{
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
  }
}
</script>
<style lang="scss" scoped>
.ProductCard{
  &.\--cr{
    border: 1px solid transparent;
    padding: 0.8rem;
    transition: border-color 0.1s ease-in-out;
    width: 320px;

    .product-card{
      &__wrapper{
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

      &__started-price{
        color: $primary;
        @include font-size-line-weight(16,24,400);
        letter-spacing: 1px;
      }
      &__colors-wrapper{
        border-bottom: 1px solid rgba($primary, 0.12);
        border-top: 1px solid rgba($primary, 0.12);
        position: relative;
      }
      &__slider {
        &-item {
          height: 3.2rem;
          margin-bottom: 0;
          padding: 0.4rem;
          width: 25%;
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
      border-color: $primary
    }
    ::v-deep{
      .FlickitySlider.product-card__colors-slider{
        height: 3.2rem;
        padding: 0 1.6rem;
      }
      .flickity{
        &-button{
          @include reset-button-style();
          height: 1.2rem;
          padding: 0;
          position: absolute;
          width: 1.2rem;

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
