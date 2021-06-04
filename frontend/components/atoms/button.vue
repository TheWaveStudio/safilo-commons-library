<template>
  <o-button :variant="`button --${variant}${additionalClasses}`"
            :tag="tag"
            :outlined="ghost"
            :disabled="disabled"
            :size="buttonSize"
            :to="path"
            @click="clicked">
    <span class="label">{{label}}</span>
    <IconComponent icon-name="arrow-right" v-if="!isCart && !disabled" />
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
  },
  methods:{
    clicked(){
      this.$emit('clicked')
    }
  }
}
</script>
<style lang="scss">
.o-btn.o-btn--button{
  border: 1px solid transparent;
  @include font-size-line-weight(12,30,700);
  overflow: hidden;
  position: relative;
  text-transform: uppercase;

  @each $name, $color in $color-palette {
    &.\--#{$name} {
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

      &.o-btn--disabled {
        background-color: currentColor;
        border-color: currentColor;
        color: rgba($disabled, 0.32);
        cursor: default;

        @if($name == 'white'){
          color: rgba($white, 0.32);
        }
        @if($name == 'secondary' or $name == 'red'){
          background-color: rgba($disabled-light, 0.32);
          border-color: rgba($disabled-light, 0.32);
        }
      }

      &.o-btn--outlined-button:not(.\--cart) {
        background-color: transparent;
        border: 1px solid  $color;
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
          border-color: rgba($disabled, 0.32);
          color: rgba($disabled, 0.32);
          @if($name == 'white'){
            border-color: rgba($white, 0.32);
            color: rgba($white, 0.32);
          }
        }

        .Icon{
          display: none;
        }
      }
    }

    &.o-btn--large{
      line-height: 1.9rem;
    }
  }

  &.\--cart{
    background: $secondary;
    border-color: $secondary;
    color: $white;
    padding: 0 1.2rem;
    &.\--white:not(.o-btn--disabled){
      background-color: $white;
      border-color: $white;
      color: $secondary;
    }
    &.o-btn--disabled:not(.\--white) {
      border-color: rgba($grey, 0.32);
      color: rgba($grey, 0.32);
    }
    .price{
      margin-left:1.6rem;
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
    pointer-events: none;
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
