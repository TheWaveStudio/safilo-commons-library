<template>
  <div class="FlickitySlider" ref="slider">
    <slot />
  </div>
</template>
<script>
import Flickity from 'flickity';
export default{
  name: 'FlickitySlider',
  props:{
    activationLimit:{
      type: Number,
      default:1,
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
        if (!this.$refs.slider || this.sliderItems <= this.activationLimit) return;
        this.slider = new Flickity(this.$refs.slider, this.options);
      });
    }
  }
}
</script>
