
<template>
  <div class="LinksList" :class="{'--pl': site === 'pl'}" itemscope itemtype="http://schema.org/SiteNavigationElement">
    <SectionTitle :title="title" :site="site"></SectionTitle>
    <li class="list-item" v-for="(link,index) in list" :key="index" itemprop="url" item>{{link.label}}</li>
  </div>
</template>
<script>
import SectionTitle from './section-title'
export default {
  name: 'LinksList',
  components: {SectionTitle},
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default:[]
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
.LinksList {
  .list-item{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1px;
    margin-bottom: 16px;
    color: $white;
    list-style: none;

    &:last-of-type{
      margin-bottom: 0;
    }
  }

  &.--pl{
    .list-item{
      color: inherit
    }
  }
}
</style>
