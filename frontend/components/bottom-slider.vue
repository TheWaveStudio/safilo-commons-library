<template>
  <section class="BottomSlider">
    <FlickitySlider :flickity-options="flickityOptions"
                    :activation-limit="activationLimit"
                    :itemsNumber="formattedItems.length"
                    navigation-component-name="BottomNavigation">
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
  name: 'BottomSlider',
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
    }    ,
    formatted:{
      type: Boolean,
      default: false
    }
  },
  computed:{
    formattedItems()  {
      return this.formatted ?  this.items.map(item => {
        item.item.type = 'slider'; return item;
      }) : this.items.map(item => ( {item: {...item, type: 'slider'}}))
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
.BottomSlider{
  position: relative;
  .slider{
    &__item{
      width: 100%;
    }
  }

  ::v-deep{
    .BottomNavigation{
      bottom: 1.6rem;
      left: 50%;
      position: absolute;
      transform: translate3d(-50%,0,0);
      @include media-breakpoint-up(lg){
        right:1.6rem;
        transform: none;
      }
    }

    .CapturePicture{
      @include media-breakpoint-down(lg) {
        padding-bottom: 3.25rem;
      }

      .capture-picture{
        &__title,
        &__description{
          @include media-breakpoint-up(lg){
            max-width: 28.6rem;
          }
        }
      }
    }
  }
}
</style>
