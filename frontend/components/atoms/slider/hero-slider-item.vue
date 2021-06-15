<template>
  <div class="HeroSliderItem">
    <figure class="hero-slider__background-wrapper">
      <img class="hero-slider__background" :src="image.src" :alt="image.alt" />
    </figure>
    <div class="hero-slider__content">
      <div class="hero-slider__title-wrapper">
        <Badge v-if="tag" :label="tag" type="vertical" />
        <h2 class="hero-slider__title heading-h2 --text-uppercase">
         {{title}}
        </h2>
      </div>
      <p v-if="description" class="hero-slider__description">{{description}}</p>
      <Cta v-if="cta" :label="cta.text" :path="cta.path" icon-name="arrow-right" color="white" />
    </div>
  </div>
</template>
<script>
import Cta from '../cta'
import Badge from '../badge'
export default{
  name:'HeroSliderItem',
  components: {
    Badge,
    Cta
  },
  props:{
    tag:{
      type: String,
      default:''
    },
    title:{
      type: String,
      default:''
    },
    description:{
      type: String,
      default:''
    },
    image:{
      type: Object,
      default: () => ({src:'',alt:''})
    },
    cta:{
      type: Object,
      default: () => ({text:'', path:'', tag:''})
    },
  }
}
</script>
<style lang="scss" scoped>
.HeroSliderItem{
  align-items: flex-end;
  height: 100vh;
  @include flexing(row);
  max-height:40rem;
  padding: 1.6rem 0.8rem;
  position: relative;

  @include media-breakpoint-up(lg){
    min-height: 40rem;
    padding: 2.2rem 0 2.2rem 3.4rem;
  }

  .hero-slider{
    &__background-wrapper{
      bottom: 0;
      left: 0;
      margin-bottom: 0;
      position: absolute;
      right: 0;
      top: 0;

      &:before{
        @extend .image-gradient;
        bottom: 0;
        content:'';
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 10;
      }
    }

    &__background{
      height: 100%;
      object-fit: cover;
      object-position: center;
      width: 100%;
      z-index:1;
    }

    &__content{
      position: relative;
      z-index:15;
    }

    &__title-wrapper{
      @include flexing(column);
      margin-bottom: 0.4rem;
      position: relative;
      @include media-breakpoint-up(lg){
        align-items: flex-end;
        flex-flow: row;
      }
    }

    &__title{
      color: $white;
      font-weight: 900;
      letter-spacing: 2px;
      margin-bottom:0;
    }

    &__description{
      color:$white;
      margin-bottom: 0.8rem;
    }
  }

  ::v-deep .Badge{
    position: absolute;
    top: -0.4rem;
    transform-origin: 0 0;
    @include media-breakpoint-up(lg){
      bottom: 0.3rem;
      left: -0.8rem;
      top: auto;
      transform-origin: bottom left;
    }
  }

}
</style>
