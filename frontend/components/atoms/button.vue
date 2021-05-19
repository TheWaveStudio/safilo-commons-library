<template>
  <o-button :variant="`${variant}${additionalClasses}`" :tag="tag" :outlined="ghost" :disabled="disabled" :size="buttonSize" :to="path">
    <span class="label">{{label}}</span>
    <IconComponent id="arrow-right" v-if="!isCart && !disabled" />
    <span class="price" v-if="isCart">{{price}}</span>
  </o-button>
</template>
<script>
import IconComponent from "./icon";
export default{
  name:'Button',
  components: {
    IconComponent
  },
  props:{
    disabled:{
      type: Boolean,
      default: false
    },
    ghost:{
      type: Boolean,
      default: false
    },
    isCart:{
      type: Boolean,
      default: false
    },
    label:{
      type: String,
      default: 'Button'
    },
    path:{
      type: [String, Boolean],
      default: false
    },
    price:{
      type: String,
      default: ''
    },
    size:{
      type: String,
      default: 'medium'
    },
    tag:{
      type: String,
      default: 'button'
    },
    variant:{
      type: String,
      default: 'primary'
    },
  },
  computed: {
    additionalClasses () {
      return this.isCart ? ` --cart` : ''
    },
    buttonSize () {
      return this.isCart ? 'large' : this.size
    },
  }
}
</script>
<style lang="scss">
.o-btn:not(.o-btn--cta){
  border: 1px solid transparent;
  @include font-size-line-weight(12,30,700);
  overflow: hidden;
  position: relative;
  text-transform: uppercase;

  &.o-btn {
    @each $name, $color in $color-palette {
      &\--#{$name} {
        background-color: $color;
        border-color: $color;
        @if($name == 'white'){
          color: $primary;
        }
        @else{
          color: $white;
        }
        min-width: 8rem;
        padding: 0 1.6rem;

        &.o-btn--disabled:not([class*="outlined"]) {
          background-color: currentColor;
          border-color: currentColor;
          color: rgba($primary, 0.32);
          cursor: default;
          &.o-btn--white{
            color: rgba($white, 0.32);
          }
          &.o-btn--cr_red{
            background-color: rgba($light-grey, 0.32);
            border-color: rgba($light-grey, 0.32);
          }
        }
      }

      &\--large{
        line-height: 1.9rem;
      }

      &\--outlined-#{$name}:not(.\--cart) {
        background-color: transparent;
        border-color: $color;
        color: $color;

        &:not(.o-btn--disabled):hover,
        &:not(.o-btn--disabled):active,
        &:not(.o-btn--disabled):focus {
          background-color: $color;
          color: $white;
          @if($name == 'white'){
            color: $primary;
          }
        }

        &.o-btn--disabled {
          border-color: rgba($primary, 0.32);
          color: rgba($primary, 0.32);
          cursor: default;

          &.o-btn--white{
            border-color: rgba($white, 0.32);
            color: rgba($white, 0.32);
          }
        }

        .Icon{
          display: none;
        }
      }
    }

    &.\--cart{
      padding: 0 1.2rem;
      &.o-btn--white:not(.o-btn--disabled){
        border-color: $white;
        color: $secondary;
      }
      .price{
        margin-left:1.6rem;
      }
    }
  }

  .o-btn__wrapper{
    position: unset;
    .label{
      position:relative;
      left:0;
      transition: left 0.3s ease-in-out;
    }
  }

  .Icon{
    height: 100%;
    position: absolute;
    right: -1rem;
    top:-50%;
    transform: translate3d(0,50%,0);
    transition: right 0.3s ease-in-out;
    .inline-svg{
      height: 0.8rem;
      width:1.2rem;
    }
  }

  &:not(.\--cart):not(.o-btn--disabled):not([class*="outlined"]):hover,
  &:not(.\--cart):not(.o-btn--disabled):not([class*="outlined"]):focus,
  &:not(.\--cart):not(.o-btn--disabled):not([class*="outlined"]):active {
    .label{
      left:-0.8rem;
    }
    .Icon{
      right: 0.5rem;
    }
  }
}
</style>
