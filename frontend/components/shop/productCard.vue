<template>
  <div class="ProductCard">
    <div class="content">
      <h3 class="title">
        {{ product.title }}
      </h3>
      <p class="price">
        {{ product?.variants?.[0]?.price }}
      </p>
    </div>
    <div class="actions">
      <o-button
          @click="addToCart"
          variant="primary">
        Add to cart
      </o-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      title: '',
      price: '',
    }
  },
  methods: {
    addToCart() {
      this.$emit("addedToCart");
    },
  },
}
</script>
<style lang="scss">
.ProductCard {
  border: 1px solid #858585;
  border-radius: 8px;
  padding: 1rem;
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:1rem;
  }
}
</style>
