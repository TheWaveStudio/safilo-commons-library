<template>
  <section class="ProductsList">
    <div class="products-list__wrapper">
      <pro
      <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </section>
</template>
<script>
import ProductCard from './atoms/product-card'
export default{
  name: 'ProductsList',
  components: {
    ProductCard
  },
  props:{
    products:{
      type: Array,
      default: () => ([])
    }
  }
}
</script>
<style lang="scss" scoped>
.ProductsList{
  .products-list{
    &__wrapper{
      @include flexing(row wrap);

      ::v-deep{
        .ProductCard{
          flex: 0 0 50%;
          @include media-breakpoint-up(lg){
            flex: 0 0 25%;
          }
        }
      }
    }
  }
}
</style>
