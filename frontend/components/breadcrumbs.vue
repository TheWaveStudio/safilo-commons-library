<template>
  <section :class="`Breadcrumbs --${site}`">
    <div class="container">
      <ol class="breadcrumbs__list" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumbs__item" itemprop="itemListElement" itemscope  itemtype="https://schema.org/ListItem">
          <a class="breadcrumbs__link" itemprop="item" :href="breadcrumb.url">
            <span itemprop="name">{{breadcrumb.label}}</span>
          </a>
          <Icon v-if="index !== breadcrumbs.length - 1" icon-name="chevron-right" />
          <meta itemprop="position" :content="index+1" />
        </li>
      </ol>
    </div>
  </section>
</template>
<script>
import Icon from './atoms/icon'
export default{
  name: 'Breadcrumbs',
  components:{
    Icon
  },
  props:{
    site:{
      type: String,
      default:'cr'
    },
    breadcrumbs:{
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.Breadcrumbs{
  border-bottom: 1px solid rgba($primary, 0.12);
  padding: 0.8rem 0;
  .breadcrumbs{
    &__list{
      align-items: center;
      @include flexing(row nowrap);
      @include font-size-line-weight(16,24,400);
      list-style: none;
      margin: 0;
      padding: 0;
      width:100%;
    }
    &__item{
      align-items: center;
      @include flexing(row);

      &:last-child{
        pointer-events: none;
      }

      ::v-deep{
        .Icon{
          margin: 0 0.25rem;
        }
      }
    }
  }

  &.\--cr{
    @include media-breakpoint-down(md){
      display: none;
    }
  }
}
</style>
