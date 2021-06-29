<template>
  <div class="HeroNavigation">
      <button class="hero-navigation__prev" v-if="prevNextButtons" @click="$emit('previous'); current > 0 ? current-- : current;">
        <Icon :iconName="navigationIcon" />
      </button>
      <span class="hero-navigation__number" v-if="hasNumbers">1</span>
      <div class="hero-navigation__points-wrapper" :style="{'--width': `${100/itemsNumber}%`}">
        <button :class="`hero-navigation__point${current === (item-1) ? ' --selected'  : ''}`"
                v-for="item in itemsNumber"
                :key="item"
                @click="$emit('selected', $event, item-1); current = item-1;"
        ></button>
      </div>
      <span class="hero-navigation__number" v-if="hasNumbers">{{itemsNumber}}</span>
      <button class="hero-navigation__next" v-if="prevNextButtons" @click="$emit('next');   current < itemsNumber-1 ? current++ : current;">
        <Icon :iconName="navigationIcon" />
      </button>
    </div>
</template>
<script>
import Icon from '../icon';
export default{
  name: 'HeroNavigation',
  components: {
    Icon
  },
  props:{
    prevNextButtons:{
      type: Boolean,
      default:true,
    },
    dots:{
      type: Boolean,
      default:true,
    },
    itemsNumber:{
      type: Number,
      default: 0
    },
    hasNumbers:{
      type: Boolean,
      default: true
    },
    navigationIcon:{
      type: String,
      default:'chevron-right'
    }
  },
  data(){
    return {
      slider: null,
      current:0,
    }},
}
</script>
<style lang="scss" scoped>
.HeroNavigation{
  align-items: center;
  @include flexing(row);
  justify-content: space-between;
  max-width: 15rem;
  width: 100%;
  z-index: 20;

  .hero-navigation{
      &__prev,
      &__next{
        @include reset-button-style();
        align-items: center;
        @include flexing(row);
        height:1.2rem;
        justify-content: center;
        min-width:1.2rem;
        padding:0;
      }

      &__prev{
        transform: rotate(180deg);
        transform-origin: center;
      }

      &__points-wrapper{
        align-items: center;
        @include flexing(row);
        margin: 0 0.7rem;
        max-width: 8rem;
        width: 100%;
      }

      &__point{
        @include reset-button-style();
        padding: 1rem 0;
        margin: -1rem 0;
        width: var(--width);

        &:before{
          background-color: rgba($white, 0.25);
          content:'';
          display: block;
          height:0.1rem;
          width: 100%;
        }

        &.\--selected{
          &:before{
            background:$secondary;
          }
        }
      }

      &__number{
        color: $white;
        @include font-size-line-weight(12,16,400);
      }
    }

    ::v-deep .Icon{
      pointer-events: none;
      .inline-svg{
        color:$white;
      }
    }
  }


</style>
