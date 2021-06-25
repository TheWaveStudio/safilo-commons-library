<template>
    <o-dropdown-item class="DropdownItem" aria-role="listitem" :value="item.value"  @click="selected=!selected">
      <div class="wrapper">
        <TechnicalItem :item="item" v-if="type==='filter'" />
        <slot v-else></slot>
        <span class="field-wrapper" v-if="hasCheckbox">
            <o-checkbox v-model="selected"/>
        </span>
      </div>
    </o-dropdown-item>
</template>
<script>
import TechnicalItem from "./technical-item";
export default{
  name: 'DropdownItem',
  components:{
    TechnicalItem
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    hasCheckbox: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'filter'
    }
  },
  data() {
    return {
      selected: false
    }
  },
}
</script>
<style lang="scss" scoped>
.DropdownItem {
  padding: 0.5rem 0;
  .wrapper {
    align-items: center;
    @include flexing(row nowrap);
    justify-content: space-between;
    width: 100%;

    ::v-deep .o-chk{
      pointer-events:none;
      margin-bottom:0;
      margin-top: 0.2rem;

      &__check{
        border: 2px solid $primary;
      }
    }
  }
}
</style>
