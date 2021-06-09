<template>
  <section class="SideModal">
    <o-modal :active.sync="isModalActive">
      <div class="modal">
        <header class="modal__header">
          <slot name="title"></slot>
          <button class="modal__close" @click="isModalActive = false">
            <Icon icon-name="close" />
          </button>
        </header>
        <div class="modal__subtitle">
          <slot name="subtitle"></slot>
        </div>
        <slot name="main-content"></slot>
      </div>
    </o-modal>
    <Button  v-bind="button" @clicked="isModalActive = true"/>
  </section>
</template>
<script>
import Button from './atoms/button'
import Icon from './atoms/icon'
export default{
  name: "SideModal",
  components: {
    Button,
    Icon
  },
  props:{
    button:{
      type: Object,
      default: () => {}
    }
  },
  data(){
      return{
        isModalActive: false
      }
  }
}
</script>
<style lang="scss" scoped >
.SideModal{
  ::v-deep .o-modal{
    &__overlay{
      background-color: rgba($black, 0.5)
    }
    &__content{
      padding: 0;
    }
  }
  .modal{
    background-color: $white;
    bottom:0;
    max-width: 75vw;
    padding: 1.6rem;
    position: fixed;
    top:0;
    right:0;
    z-index:2;
    width:100%;
    @include media-breakpoint-up(md){
      max-width: 50vw;
    }

    &__header{
      @include flexing(row);
      justify-content: space-between;
      margin-bottom: 1.6rem;
      h1,h2,h3,h4,h5,h6{
        margin-bottom:0;
      }
      ::v-deep .Icon{
        .inline-svg{
          height:1rem;
          width:1rem;
        }
      }
    }
    &__subtitle{
      letter-spacing: 1px;
      margin-bottom: 1.6rem;
    }
    &__close{
      @include reset-button-style();
      padding: 1rem;
      margin: -1rem;
      @include media-breakpoint-down(md){
        left:1rem;
        position: fixed;
      }
    }
  }
}
</style>

