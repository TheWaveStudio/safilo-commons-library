<template>
  <span class="Icon">
    <svg class="inline-svg">
      <use v-bind="{'xlink:href': `${svgsPath}#icon-${id}`}" />
    </svg>
  </span>
</template>
<script>
export default {
  name: 'IconComponent',
  props: {
    id: {
      type: String,
      default: 'arrow-right'
    }
  },
  data () {
    return {
      svgsPath: require('../../assets/imgs/icons/icons.svg')
    }
  }
}
</script>
<style lang="scss">
  .Icon {
    color: $primary;
    display: inline-flex;
    flex-flow: row;
    align-items: center;
    .inline-svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
</style>
