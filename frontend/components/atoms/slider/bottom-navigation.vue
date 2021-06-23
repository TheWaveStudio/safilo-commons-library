<template>
  <div class="BottomNavigation">
    <div class="bottom-navigation__buttons-wrapper">
      <button class="bottom-navigation__prev" v-if="prevNextButtons" @click="$emit('previous'); current > 0 ? current-- : current;">
        <Icon :iconName="navigationIcon" />
      </button>
      <button class="bottom-navigation__next" v-if="prevNextButtons" @click="$emit('next');   current < itemsNumber-1 ? current++ : current;">
        <Icon :iconName="navigationIcon" />
      </button>
    </div>
      <div class="bottom-navigation__points-wrapper" :style="{'--width': `${100/itemsNumber}%`}">
        <button :class="`bottom-navigation__point${current === (item-1) ? ' --selected'  : ''}`"
                v-for="item in itemsNumber"
                :key="item"
                @click="$emit('selected', $event, item-1); current = item-1;"
        ></button>
      </div>
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
    itemsNumber:{
      type: Number,
      default: 0
    },
    navigationIcon:{
      type: String,
      default:'arrow-right'
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
.BottomNavigation{
  @include flexing(row);
  justify-content: center;
  width: 100%;
  z-index: 3;

  @include media-breakpoint-up(lg){
    justify-content: flex-end;
    width: auto;
  }

  .bottom-navigation{
      &__buttons-wrapper{
        display: none;
        @include media-breakpoint-up(lg){
          align-items: center;
          @include flexing(row);
          justify-content: space-between;
          max-width: 6.4rem;
          width: 100%;
        }
      }

      &__prev,
      &__next{
        @include reset-button-style();
        align-items: center;
        background-color: rgba($white, 0.3);
        @include flexing(row);
        height:2.4rem;
        justify-content: center;
        min-width:2.4rem;
        padding:0;
        transition: background 0.2s ease-in-out;

        &:hover{
          background-color: $white;
        }
      }

      &__prev{
        margin-right: 1.6rem;
        transform: rotate(180deg);
        transform-origin: center;
      }

      &__points-wrapper{
        align-items: center;
        @include flexing(row);
        justify-content: center;
        max-width:100%;
        width: 100%;

        @include media-breakpoint-up(lg){
          display: none;
        }
      }

      &__point{
        @include reset-button-style();
        padding: 1rem 0;
        margin: -1rem 0.4rem;
        max-width: 1.6rem;
        width: var(--width);

        &:before{
          background-color: rgba($white, 0.3);
          content:'';
          display: block;
          height: 1px;
          width: 100%;
        }

        &.\--selected{
          &:before{
            background:$white;
          }
        }
      }
    }

    ::v-deep .Icon{
      pointer-events: none;
      .inline-svg{
        color:$primary;
      }
    }
  }


</style>
