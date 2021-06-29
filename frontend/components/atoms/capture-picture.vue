<template>
  <div :class="`CapturePicture --${type}`">
    <figure class="capture-picture__background-wrapper">
      <img class="capture-picture__background" :src="image.src" :alt="image.alt" />
    </figure>
    <div class="capture-picture__content">
      <div class="capture-picture__title-wrapper">
        <Badge v-if="tag" :label="tag" type="vertical" />
        <h2 :class="`capture-picture__title ${titleHeadingClass} --text-uppercase`">
          {{title}}
        </h2>
      </div>
      <p v-if="description" class="capture-picture__description">{{description}}</p>
      <Cta v-if="cta.text" :label="cta.text" :path="cta.path" icon-name="arrow-right" color="white" tag="nuxt-link"/>
    </div>
  </div>
</template>
<script>
import Cta from './cta'
import Badge from './badge'
export default{
  name:'CapturePicture',
  components: {
    Badge,
    Cta
  },
  props:{
    tag:{
      type: String,
      default:''
    },
    type: {
      type: String,
      default:'slider'
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
      default: function () {return {text:'', path:'', tag:''}}
    },
  },
  computed:{
    titleHeadingClass(){
      return this.headingDictionary[this.type]
    }
  },
  data(){
    return {
      headingDictionary:{
        slider: 'heading-h2',
        menu: 'heading-h6',
        highlighted: 'heading-h2'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.CapturePicture{
  align-items: flex-end;
  height: 100%;
  @include flexing(row);
  position: relative;

  .capture-picture{
    &__background-wrapper{
      bottom: 0;
      left: 0;
      margin-bottom: 0;
      position: absolute;
      right: 0;
      top: 0;

      &:before{
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
      z-index:20;
    }

    &__title-wrapper{
      @include flexing(column);
      position: relative;
      @include media-breakpoint-up(lg){
        align-items: flex-end;
        flex-flow: row;
      }
    }

    &__title{
      color: $white;
      margin-bottom:0;
    }

    &__description{
      color:$white;
      margin-bottom: 0.8rem;
    }
  }

  &.\--hero,
  &.\--slider,
  &.\--highlighted{
    padding: 1.6rem 0.8rem;
    .capture-picture{
      &__background-wrapper{
        &:before{
          @extend .image-gradient-slider;
        }
      }

      &__title-wrapper{
        margin-bottom: 0.4rem;
      }

      &__title{
        font-weight: 900;
      }
    }
  }

  &.\--menu{
    height:100%;
    min-height:11.2rem;
    padding: 0.8rem;
    width:100%;

    .capture-picture{
      &__background-wrapper{
        &:before{
          @extend .image-gradient-menu;
        }
      }

      &__background{
        object-position: top left;
      }
    }
  }

  &.\--hero{
    min-height:100vh;
    @include media-breakpoint-up(lg){
      min-height: 40rem;
      padding: 2.2rem 3.4rem;
    }
  }

  &.\--slider{
    min-height:28rem;
    @include media-breakpoint-up(lg){
      min-height: 32rem;
      padding: 1.6rem 3.4rem;
    }
  }

  &.\--highlighted{
    min-height:21rem;
    @include media-breakpoint-up(lg){
      min-height: 24rem;
      padding: 1.6rem;
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
