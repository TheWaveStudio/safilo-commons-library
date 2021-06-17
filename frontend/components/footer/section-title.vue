
<template>
  <h4 class="SectionTitle" :class="{'--color-red': site === 'cr'}">{{title}}</h4>
</template>
<script>

export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    site: {
      validator: (val) => ['cr', 'pl'].indexOf(val !== -1),
    }
  },
  data() {
    return {};
  }
}
</script>
<style lang="scss">
.SectionTitle {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
</style>
