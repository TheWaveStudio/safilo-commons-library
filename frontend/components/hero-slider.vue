<template>
  <section class="HeroSlider"  :style="{'--width': `${100/items.length}%`}">
    <FlickitySlider :flickity-options="flickityOptions"
                    :activation-limit="activationLimit"
                    :itemsNumber="formattedItems.length"
                    navigation-component-name="HeroNavigation">
      <div class="slider__wrapper" ref="slider">
        <div class="slider__item" v-for="(item, index) in formattedItems" :key="index">
          <CapturePicture v-bind="{...item, formatted}" />
        </div>
      </div>
    </FlickitySlider>
  </section>
</template>
<script>
import FlickitySlider from './atoms/flickity-slider'
import CapturePicture from './atoms/capture-picture'
export default{
  name: 'HeroSlider',
  components: {
    CapturePicture,
    FlickitySlider
  },
  props:{
    activationLimit:{
      type: Number,
      default:2,
    },
    items:{
      type: Array,
      default: () => []
    },
    flickityOptions:{
      type: Object,
      default: function () { return {}}
    },
    formatted:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      slider: null
    }
  },
  computed:{
    formattedItems()  {
      return this.formatted ?  this.items.map(item => {
        item.item.type = 'hero'; return item;
      }) : this.items.map(item => ( {item: {...item, type: 'hero'}}))
    }
  }
}
</script>
<style scoped lang="scss">
.HeroSlider{
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  .slider{
    &__item{
      width: 100%;
    }
  }

  ::v-deep .HeroNavigation{
    display: none;
    @include media-breakpoint-up(lg){
      bottom: 1.6rem;
      display: flex;
      position: absolute;
      right: 1.6rem;
    }
  }
}
</style>
