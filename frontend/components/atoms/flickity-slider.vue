<template>
  <div class="FlickitySlider" ref="slider">
    <slot ref="content"/>
    <div class="flickity-slider__navigation" v-if="itemsNumber >= activationLimit && navigationComponentName.length">
     <component :is="navigationComponentName"
                :hasNumbers="true"
                :items-number="itemsNumber"
                @previous="slider.previous()"
                @next="slider.next()"
                @selected="goToIndex"
     />
    </div>
  </div>
</template>
<script>
import BottomNavigation from './slider/bottom-navigation'
import HeroNavigation from './slider/hero-navigation'
export default{
  name: 'FlickitySlider',
  components: {
    BottomNavigation,
    HeroNavigation
  },
  props:{
    checkWidth:{
      type: Boolean,
      default: false,
    },
    activationLimit:{
      type: Number,
      default:2,
    },
    flickityOptions:{
      type: Object,
      default: null
    },
    itemsNumber:{
      type: Number,
      default: 0
    },
    navigationComponentName:{
      type: String,
      default: ''
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
    window.removeEventListener('resize', ()=> this.checkWidthActivation());
  },
  methods:{
    initSlider() {
      if (!this.$refs.slider || this.itemsNumber < this.activationLimit) return;
      if(this.checkWidth){
        window.addEventListener('resize', ()=> this.checkWidthActivation());
      }
      this.createSlider();
  },
    goToIndex(event, index){
      this.slider.select(index, true)
    },
    createSlider(){
      const Flickity = require('flickity');
      this.slider = new Flickity(this.$refs.slider, this.flickityOptions && Object.keys(this.flickityOptions).length ?  this.flickityOptions : {cellAlign: "left", cellSelector: ".slider__item", draggable: true, pageDots: false, prevNextButtons: false});
    },
    isSmaller(){
      const sliderWidth = Array.from(this.$refs.slider.querySelectorAll(this.flickityOptions.cellSelector))
          .reduce((acc, item) => acc + +item.offsetWidth + +getComputedStyle(item).marginRight.replace('px', '') , 0)
      return window.innerWidth > sliderWidth
    },
    checkWidthActivation(){
      if(this.isSmaller()){
        this.slider = this.slider ? this.slider.destroy() : null;
        return;
      }
      !this.slider && this.createSlider();
    }
  }
}
</script>
<style lang="scss" scoped>
.FlickitySlider{
  position: relative;
}
</style>
