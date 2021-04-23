<template>
  <div class="ProductCard">
    <h3 class="title">
      {{ product.title }}
    </h3>
    <p class="price">
      {{ product?.variants?.[0]?.price }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    product: {}
  }
}
</script>
