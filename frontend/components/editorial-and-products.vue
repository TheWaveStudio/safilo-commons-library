<template>
  <section :class="`EditorialAndProducts --${site} --${type}`"
  >
    <div class="editorial-and-products__row">
      <div class="editorial-and-products__column">
        <ProductsList :products="products" />
      </div>
      <div class="editorial-and-products__column">
        <CapturePicture v-bind="{...editorial}" />
      </div>
    </div>
  </section>
</template>
<script>
import CapturePicture from './atoms/capture-picture'
import ProductsList from './products-list'
export default{
  name: 'EditorialAndProducts',
  components: {
    CapturePicture,
    ProductsList
  },
  props:{
    type:{
      type: String,
      default: () => 'ltr'
    },
    site:{
      type: String,
      default: 'cr'
    },
    products:{
      type: Array,
      default: () => ([])
    },
    editorial:{
      type: Object,
      default: () => ({})
    },
  }
}
</script>
<style lang="scss" scoped>
.EditorialAndProducts{
  .editorial-and-products{
    &__row{
      @include flexing(row);
    }
    &__column{
      flex: 0 0 50%;
      ::v-deep{
        .ProductCard{
          flex: 0 0 50%;
        }
      }
    }
  }
  &.\--rtl{
    .editorial-and-products{
      &__row{
        @include flexing(row-reverse);
      }
    }
  }
}
</style>
