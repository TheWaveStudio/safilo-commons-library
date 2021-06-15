<template>
  <div class="FlickitySlider" ref="slider">
    <slot />
    <div class="flickity-slider__navigation" v-if="itemsNumber >= activationLimit && navigationComponentName.length">
     <component :is="navigationComponentName"
                :hasNumbers="true"
                navigation-icon="chevron-right"
                :items-number="itemsNumber"
                @previous="slider.previous()"
                @next="slider.next()"
                @selected="goToIndex"
     />
    </div>
  </div>
</template>
<script>
import Flickity from 'flickity';
import HeroNavigation from './slider/hero-navigation'
export default{
  name: 'FlickitySlider',
  components: {
    HeroNavigation
  },
  props:{
    activationLimit:{
      type: Number,
      default:1,
    },
    flickityOptions:{
      type: Object,
      default: () => {}
    },
    itemsNumber:{
      type: Number,
      default: 0
    },
    navigationComponentName:{
      type: String,
      default: 'HeroNavigation'
    },
  },
  data(){
    return {
      slider: null,
      current:0,
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
      return this.flickityOptions.length ? this.flickityOptions : {cellAlign: "left", cellSelector: ".slider__item", draggable: true, pageDots: false, prevNextButtons: false};
    }
  },
  methods:{
    initSlider() {
      this.$nextTick().then(() => {
        if (!this.$refs.slider || this.sliderItems <= this.activationLimit) return;
        this.slider = new Flickity(this.$refs.slider, this.options);
      });
    },
    goToIndex(event, index){
      this.slider.select(index, true)
    }
  }
}
</script>
<style lang="scss" scoped>
.FlickitySlider{
  position: relative;
}
</style>
