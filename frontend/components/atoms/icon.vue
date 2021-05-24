<template>
  <span class="Icon">
    <svg class="inline-svg">
      <use v-bind="{'xlink:href': `${svgsPath}#icon-${iconName}`}" />
    </svg>
  </span>
</template>
<script>
export default {
  name: 'IconComponent',
  props: {
    iconName: {
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
    display: inline-flex;
    flex-flow: row;
    align-items: center;
    .inline-svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
</style>
