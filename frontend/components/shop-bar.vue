<template>
  <section class="ShopBar">
    <div class="container">
      <div class="shop-bar__row">
        <div class="shop-bar__categories">
          <FlickitySlider
              :activation-limit="1"
              :items-number="categories.length"
              :check-width="true"
              :flickity-options="{
              cellAlign: 'left',
              cellSelector: '.shop-bar__category',
              draggable: true,
              pageDots: false,
              prevNextButtons: true,
              wrapAround: true,
              watchCSS: true
              // lazyLoad: true
            }">
            <a class="shop-bar__category" v-for="(category, index) in categories" :key="index" :href="category.src" >
              {{category.label}}
            </a>
          </FlickitySlider>
        </div>
        <div class="shop-bar__info-wrapper">
          <span class="shop-bar__total">
            {{productsTotal}} {{labels.products}}
          </span>
          <button
              v-if="breakpoints.isMobile"
              class="shop-bar__filter-btn"
              type="button"
              aria-label="Show filters"
              title="Show filters"
              @click="opened=true"
            >
            {{labels.filters}}
          </button>
        </div>
      </div>
      <div class="shop-bar__row">
        <div :class="{'shop-bar__filters': true, '--active': opened}">
          <header v-if="breakpoints.isMobile" class="shop-bar__filters-header">
            <button
                v-if="breakpoints.isMobile"
                class="shop-bar__filter-btn"
                type="button"
                aria-label="Show filters"
                title="Show filters"
                @click="opened=false"
            >
              <Icon icon-name="close" />
            </button>
            <h3 class="shop-bar__filters-title heading-h5 --text-uppercase">{{labels.filters}}</h3>
          </header>
          <div class="shop-bar__filters-wrapper">
            <Dropdown v-for="(filter,index) in filters" :key="index" v-bind="filter"/>
          </div>
          <div v-if="breakpoints.isMobile" class="shop-bar__filters-actions">
            <Button class="shop-bar__filters-action" :label="labels.clear" :ghost="true" variant="black" />
            <Button class="shop-bar__filters-action" :label="labels.apply" variant="black" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
import Breakpoints from '../composables/breakpoints'
import Button from './atoms/button'
import Icon from './atoms/icon'
import FlickitySlider from './atoms/flickity-slider'
import Dropdown from './atoms/dropdown'
export default{
  name: 'ShopBar',
  components: {
    Button,
    Dropdown,
    Icon,
    FlickitySlider
  },
  setup () {
    if (process.server)
      return { breakpoints: {}}

    const { breakpoints } = Breakpoints()
    return { breakpoints }
  },
  props:{
    categories:{
      type: Array,
      default: ()=> []
    },
    filters:{
      type: Array,
      default: ()=> []
    },
    orderBy:{
      type: Array,
      default: ()=> []
    },
    productsTotal:{
      type: String,
      default: ''
    },
    labels:{
      type: Object,
      default: ()=> {}
    }
  },
  data(){
    return{
      opened: false
    }
  }
}
</script>
<style lang="scss" scoped>
.ShopBar{
  border-bottom: 1px solid rgba($primary, 0.12);
  .shop-bar{
    &__row{
      width: 100%;

      @include media-breakpoint-up(lg){
        align-items: center;
        @include flexing(row);
        justify-content:space-between;
      }

      &:not(:last-child){
        @include media-breakpoint-up(lg){
          border-bottom: 1px solid rgba($primary, 0.12);
        }
      }
    }

    &__categories{
      border-bottom: 1px solid rgba($primary, 0.12);
      @include font-size-line-weight(14,20,400);
      padding: 0.6rem 0;
      @include media-breakpoint-up(lg){
        border-bottom: 0;
        padding: 0.8rem 0 0.8rem 0.8rem;
        @include font-size-line-weight(16,24,400);
      }

      ::v-deep{
        .FlickitySlider{
          white-space: nowrap;
          &:after{
            content: 'flickity';
            display: none;
            @include media-breakpoint-up(lg){
              content: '';
            }
          }
        }
        .flickity{
          &-button{
            @include reset-button-style();
            height: 1.2rem;
            padding: 0;
            position: absolute;
            top:50%;
            transform: translate3d(0,-50%,0);
            width: 1rem;
            z-index: 20;
            &.previous{
              display: none;
            }
            &.next{
              right: -1rem;
            }
            &-icon{
              width: 50%;
            }
          }
        }
      }
    }

    &__category{
      color: $primary;
      display: inline-block;
      margin-right: 1.2rem;
      white-space: nowrap;

      &:not(:last-child){
        @include media-breakpoint-up(lg){
          margin-right: 1.6rem;
        }
      }

      &:last-child{
        @include media-breakpoint-up(lg){
          margin-right:0;
        }
      }
    }

    &__info-wrapper{
      @include media-breakpoint-down(lg){
        align-items: center;
        @include flexing(row);
        @include font-size-line-weight(14,20,400);
        justify-content: space-between;
        padding: 0.7rem 0;
      }
    }

    &__total{
      color: $grey;
    }

    &__filter-btn{
      @include reset-button-style();
      display: inline-flex;
      font-weight:700;
      margin-right: 1rem;
      padding: 0;
      text-transform: uppercase;
    }

    &__filters{
      padding-top: 0.4rem;
      position: relative;

      @include media-breakpoint-down(lg){
        background-color: $white;
        bottom: 0;
        @include flexing(column);
        left: 0;
        padding-top: 0;
        position: fixed;
        right: 0;
        top: 0;
        transition: transform 0.2s ease-in-out;
        transform: translate3d(0, -100%, 0);
        z-index:200;
      }

      &-header{
        @include media-breakpoint-down(lg){
          align-items: center;
          border-bottom: 1px solid rgba($primary, 0.12);
          @include flexing(row);
          flex: 0;
          padding: 1rem 0.8rem;
        }
      }

      &-title{
        margin-bottom:0;
      }

      &.\--active{
        @include media-breakpoint-down(lg){
          transform: translate3d(0, 0, 0);
        }
      }

      &-wrapper{
        @include media-breakpoint-down(lg){
          flex:1;
          max-height:100%;
          overflow-y: auto;
        }
      }

      &-actions{
        border-top: 1px solid rgba($primary, 0.12);
        @include flexing(row);
        justify-content: space-between;
        flex: 0;
        padding: 0.8rem;
      }
    }
  }

  .shop-bar__filter-btn{
    ::v-deep{
      .Icon{
        .inline-svg{
          height:0.8rem;
          width: 0.8rem;
        }
      }
    }
  }
}
</style>
