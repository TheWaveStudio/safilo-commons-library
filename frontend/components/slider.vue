<template>
  <section class="Slider">
      <div class="slider__wrapper" ref="slider" :style="{'--width': `${100/sliderItems.length}%`}">
        <div class="slider__item" v-for="(item, index) in sliderItems" :key="index">
          <component :is="item.componentName" v-bind="item.fields"/>
        </div>
      </div>
    <div v-if="sliderItems.length > 1" class="slider__navigation">
      <span class="slider__navigation-number">1</span>
      <span class="slider__navigation-number">{{sliderItems.length}}</span>
    </div>
  </section>
</template>
<script>
import Flickity from 'flickity';
import HeroSliderItem from './atoms/slider/hero-slider-item'
export default{
  name: 'Slider',
  components: {
    HeroSliderItem
  },
  props:{
    activationLimit:{
      type: Number,
      default:1,
    },
    sliderItems:{
      type: Array,
      default: () => ['a','b','c']
    },
    flickityOptions:{
      type: Object,
      default: () => {}
    }
  },
  data(){
    return {
      slider: null
    }},
  mounted() {
    this.$nextTick().then(() => {
      this.initSlider()
    });
  },
  beforeDestroy() {
    this.slider?.destroy()
  },
  computed:{
    options(){
      return this.flickityOptions.length ? this.flickityOptions : {cellAlign: "left", cellSelector: ".slider__item", draggable: true, pageDots: true, prevNextButtons: true};
    }
  },
  methods:{
    initSlider() {
      this.$nextTick().then(() => {
        if (!this.$refs.slider || this.sliderItems <= 1) return;
        this.slider = new Flickity(this.$refs.slider, this.options);
      });
    }
  }
}
</script>
<style scoped lang="scss">
.Slider{
  position: relative;
  .slider{
    &__item{
      width: 100%;
    }

    &__navigation{
      display: none;
      @include media-breakpoint-up(lg){
        bottom: 2rem;
        @include flexing(row);
        justify-content:space-between;
        max-width: 10rem;
        min-height: 0.6rem;
        position: absolute;
        right: 3.5rem;
        width: 100%;

      }
    }

    &__navigation-number{
      color: $white;
      @include font-size-line-weight(12,16,400);
    }

  }

  ::v-deep .flickity-button{
    display: none;
    @include media-breakpoint-up(lg) {
      background: transparent;
      bottom: 1.6rem;
      display: block;
      height: 0.8rem;
      left: auto;
      outline: none;
      padding: 0;
      top: auto;
      width: 0.8rem;
      z-index: 10;
    }
    &.next {
      right: 2rem;
    }
    &.previous {
      right: 14rem;
    }
    .flickity-button-icon {
      height: 0.8rem;
      fill: $white;
      left: 0;
      top: 0;
      width: 0.8rem;
    }
  }


  ::v-deep .flickity-page-dots {
    display: none;
    @include media-breakpoint-up(lg) {
      bottom: 2.4rem;
      display: block;
      @include flexing(row);
      justify-content: space-between;
      max-width: 8rem;
      position: absolute;
      right: 4.5rem;
      z-index: 10;
    }

    .dot {
      background: transparent;
      border: 0;
      border-radius: 0;
      margin: -1rem 0;
      padding: 1rem 0;
      opacity: 1;
      width: var(--width);

      &:before {
        background-color: rgba($white, 0.25);
        content: '';
        display: block;
        height: 0.1rem;
      }

      &.is-selected {
        &:before {
          background-color: $secondary;
        }
      }
    }
  }
}
</style>
