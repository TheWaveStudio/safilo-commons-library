<template>
  <section class="HeroSlider"  :style="{'--width': `${100/sliderItems.length}%`}">
    <FlickitySlider :flickity-options="flickityOptions"
                    :activation-limit="activationLimit"
                    :itemsNumber="sliderItems.length">
      <div class="slider__wrapper" ref="slider">
        <div class="slider__item" v-for="(item, index) in sliderItems" :key="index">
          <HeroSliderItem v-bind="item.fields" />
        </div>
      </div>
    </FlickitySlider>
  </section>
</template>
<script>
import FlickitySlider from './atoms/flickity-slider'
import HeroSliderItem from './atoms/slider/hero-slider-item'
export default{
  name: 'HeroSlider',
  components: {
    FlickitySlider,
    HeroSliderItem
  },
  props:{
    activationLimit:{
      type: Number,
      default:1,
    },
    sliderItems:{
      type: Array,
      default: () => []
    },
    flickityOptions:{
      type: Object,
      default: function () { return {}}
    }
  },
  data(){
    return {
      slider: null
    }
  }
}
</script>
<style scoped lang="scss">
.HeroSlider{
  position: relative;
  .slider{
    &__item{
      width: 100%;
    }
  }

  ::v-deep .HeroNavigation{
    display: none;
    @include media-breakpoint-down(lg){
      bottom: 1.6rem;
      max-width: 11rem;
      position: absolute;
      right: 1.6rem;
    }
  }
}
</style>
