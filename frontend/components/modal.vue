<template>
  <section :class="`Modal --${type}`">
    <o-modal :active.sync="isModalActive">
      <div class="modal">
        <header class="modal__header">
          <slot name="title"></slot>
          <button class="modal__close" @click.stop.prevent="isModalActive = false; $emit('closeModal')">
            <Icon icon-name="close" />
          </button>
        </header>
        <div class="modal__subtitle">
          <slot name="subtitle"></slot>
        </div>
        <div class="modal__content">
          <slot name="main-content"></slot>
        </div>
      </div>
    </o-modal>
    <slot name="open-button"></slot>
    <component v-if="hasDefaultOpenButton" :is="buttonComponent" v-bind="button" @clicked="isModalActive = true; $emit('openModal')"/>
  </section>
</template>
<script>
import Button from './atoms/button'
import Cta from './atoms/cta'
import Icon from './atoms/icon'
export default{
  name: "Modal",
  components: {
    Button,
    Cta,
    Icon
  },
  props:{
    buttonComponent:{
      type:String,
      default:'Button'
    },
    hasDefaultOpenButton:{
      type:Boolean,
      default: true
    },
    button:{
      type: Object,
      default: () => {}
    },
    type: {
      type:String,
      default:'side'
    },
  },
  data(){
    return{
      isModalActive: false
    }
  }
}
</script>
<style lang="scss" scoped >
.Modal{
  ::v-deep .o-modal{
    &__overlay{
      background-color: rgba($black, 0.5);
      bottom: 0;
      left:0;
      position: fixed;
      right: 0;
      top: 0;
      z-index:199;
    }
    &__content{
      padding: 0;
    }

    .modal{
      background-color: $white;
      @include flexing(column);
      padding: 1.6rem;
      position: fixed;
      width: 100%;
      z-index: 200;

      &__header {
        @include flexing(row);
        justify-content: space-between;
        margin-bottom: 1.6rem;

        h1, h2, h3, h4, h5, h6 {
          margin-bottom: 0;
        }

        ::v-deep .Icon {
          .inline-svg {
            height: 1rem;
            width: 1rem;
          }
        }
      }

      &__close {
        @include reset-button-style();
        align-items: center;
        @include flexing(row);
        margin: -1rem;
        padding: 1rem;
      }
    }
  }

  &.\--side{
    ::v-deep .o-modal {
      .modal {
        bottom: 0;
        max-width: 75vw;
        top: 0;
        right: 0;
        @include media-breakpoint-up(lg) {
          max-width: 50vw;
        }

        &__subtitle {
          letter-spacing: 1px;
          margin-bottom: 1.6rem;
        }

        &__close{
          @include media-breakpoint-down(lg) {
            left: 1rem;
            position: fixed;
          }
        }
      }
    }
  }

  &.\--center{
    ::v-deep .o-modal {
      .modal {
        bottom: 0;
        left: 50%;
        height: fit-content;
        right: 0;
        top: 50%;
        transform: translate3d(-50%,-50%,0);

        @include media-breakpoint-up(lg) {
          max-height: calc(100vh - 3.2rem);
          max-width: 28.8rem;
        }

        &__subtitle {
          letter-spacing: 1px;
          margin-bottom: 1.6rem;
        }
      }
    }
  }

  .modal {
    &__close {
      ::v-deep .Icon {
        .inline-svg {
          height: 1rem;
          width: 1rem;
        }
      }
    }

    &__title,
    &__subtitle {
      flex:0
    }

    &__content {
      flex: 1;
      max-height:100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>

