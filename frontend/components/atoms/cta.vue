<template>
  <o-button :variant="`cta underlined${classes}`" :tag="tag" :disabled="disabled" :to="path">
    {{ label }}<IconComponent :icon-name="iconName" v-if="iconName" />
  </o-button>
</template>
<script>
import IconComponent from "./icon";
export default {
  name: 'Icon',
  components: {
    IconComponent
  },
  props: {
    color: {
      type: String,
      default: ''
    },
    disabled:{
      type: Boolean,
      default: false
    },
    iconName: {
      type: [String, Boolean],
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'a'
    }
  },
  computed: {
    classes () {
      return `${this.color ? ` --${this.color}` : ''}${this.iconName ? ' --with-icon' : ''}`
    },
  }
}
</script>
<style lang="scss">
.o-btn{
  &.o-btn--cta {
    background: transparent;
    @include font-size-line-weight(16,24,400);
    padding: 0;

    &.underlined {
      text-decoration: underline;

      @each $name, $color in $color-palette {
        &.\--#{$name}:not(.o-btn--disabled) {
          color: $color;
        }
      }
    }

    &.--with-icon {
      text-transform: uppercase;

      @each $name, $color in $color-palette {
        &.\--#{$name}:not(.o-btn--disabled) {
          color: $color;
        }
      }

      .Icon {
        margin-left: 0.4rem;

        .inline-svg{
          height: 0.6rem;
          width: 1.25rem;
        }
      }
    }
  }

  &.o-btn--disabled {
    color: rgba($primary, 0.32);
    cursor: default;

    &.\--white{
      color: rgba($white, 0.32);
    }
  }
}
</style>
