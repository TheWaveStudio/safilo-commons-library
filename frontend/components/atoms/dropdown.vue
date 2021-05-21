<template>
  <o-dropdown class="Dropdown" :triggers="['hover']" v-model="selectedOptions" multiple aria-role="list">
    <o-button type="button" slot="trigger">
      <span class="label">{{ label }}</span>
      <Icon id="caret-down"></Icon>
    </o-button>
    <DropdownItem v-for="item in items" :key="item.value" :item="item" />
  </o-dropdown>
</template>
<script>
import Icon from './icon';
import DropdownItem from './dropdownItem'
export default{
  name: 'Dropdown',
  components: {
    DropdownItem,
    Icon
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
  }
}
</script>
<style lang="scss">
.Dropdown {
  color: $primary;
  .o-btn{
    border: 1px solid $white;
    border-bottom: 0;
    color: currentColor;
    @include font-size-line-weight(16,62,400);
    letter-spacing: 1px;
    padding: 0 0.8rem;
    transition: border-color 150ms ease-out;
    .o-btn__wrapper{
      & > span{
        align-items: center;
        @include flexing(row);
      }
    }
    .Icon{
      margin-left:0.3rem;
      .inline-svg{
        height: 1rem;
        width: 1rem;
      }
    }
  }
  .o-drop__menu{
    border: 1px solid $primary;
    left:0;
    max-height: 15.6rem;
    min-width: 16rem;
    overflow-y: scroll;
    padding: 0 0.8rem;
    position:absolute;
    top:100%;
    transform: none;
  }

  &:hover,
  &:active,
  &:focus{
    .o-btn{
      border-color: $primary;
    }
  }
  .o-drop__item--active{
    background-color: transparent;
    color: currentColor;
  }
}
</style>
