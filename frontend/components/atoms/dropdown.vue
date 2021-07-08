<template>
  <o-dropdown ref="dropdown" :can-close="false" class="Dropdown" :triggers="[breakpoints.isMobile ? 'click' : 'hover']" v-model="selectedOptions" multiple aria-role="list">
    <o-button type="button" slot="trigger" @click="handlerMobile">
      <span class="label">{{ label }}</span>
      <IconComponent icon-name="caret-down"></IconComponent>
    </o-button>
    <DropdownItem v-for="item in items" :key="item.value" :item="item" />
  </o-dropdown>
</template>
<script>
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
import Breakpoints from '../../composables/breakpoints'
import IconComponent from './icon';
import DropdownItem from './dropdownItem'
export default{
  name: 'Dropdown',
  components: {
    DropdownItem,
    IconComponent
  },
  setup () {
    if (process.server)
      return { breakpoints: {}}

    const { breakpoints } = Breakpoints()
    return { breakpoints }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedOptions: []
    }
  },
  watch: {
    selectedOptions: function() {
      this.$emit('selectChanged');
      console.log(this.selectedOptions);
    }
  },
  methods: {
    handlerMobile(){
      if(!this.breakpoints.isMobile) return;
      const menu = this.$refs.dropdown.$el.querySelector('.o-drop__menu')
      if(!menu) return;
      menu.style.height = !menu.classList.contains('o-drop__menu--active') ? `${menu.scrollHeight}px` : '0px';
    }
  }
}
</script>
<style lang="scss" scoped>
.Dropdown {
  color: $primary;
  flex-direction: column;

  @include media-breakpoint-down(md){
    width: 100%;
  }

  ::v-deep .o-btn{
    border: 1px solid $white;
    border-bottom: 0;
    color: currentColor;
    @include font-size-line-weight(16,62,400);
    letter-spacing: 1px;
    padding: 0 0.8rem;
    transition: border-color 150ms ease-out;

    @include media-breakpoint-down(md){
      border:0;
      justify-content: space-between;
      padding: 0 0.8rem;
      text-align: left;
      width: 100%;
    }

    .o-btn__wrapper{
      @include media-breakpoint-down(md){
        width: 100%;
      }

      & > span{
        align-items: center;
        @include flexing(row);

        @include media-breakpoint-down(md){
          justify-content: space-between;
          margin: 0;
          width: 100%;
        }
      }
    }
    .Icon{
      margin-left:0.3rem;
      .inline-svg{
        height: 1.2rem;
        margin-top: 0.2rem;
        transform:rotate(0);
        transition: transform 0.3s ease-in-out;
        width: 1.2rem;
      }
    }
  }
  ::v-deep .o-drop__menu{
    border: 1px solid $primary;
    left:0;
    max-height: 15.6rem;
    min-width: 16rem;
    overflow-y: scroll;
    padding: 0 0.8rem;
    position:absolute;
    top:100%;
    transform: none;

    @include media-breakpoint-down(md){
      display:block!important;
      border: 0;
      height: 0;
      overflow:hidden;
      position: relative;
      transition: all 0.2s ease-in-out;
      transform: translate3d(0,-10%,0);
      width: 100%;
    }

    &--active{
      @include media-breakpoint-down(md){
        transform: translate3d(0,0,0);
      }
    }

  }

  ::v-deep{
    .o-drop__overlay{
      display:none !important;
    }
  }

  &:hover,
  &:active,
  &:focus{
    .o-btn{
      border-color: $primary;
    }
  }
  ::v-deep .o-drop__item--active{
    background-color: transparent;
    color: currentColor;
  }

  &:hover{
    .o-btn{
      .Icon{
        .inline-svg{
          transform:rotate(-180deg);
        }
      }
    }
  }
}
</style>
