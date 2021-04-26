<template>
  <div class="ProductCard">
    <script v-html="jsonld" type="application/ld+json" />
    <div class="content">
      <h3 v-if="product.title" class="title">
        {{ product.title }}
      </h3>
      <p v-if="product.variants[0].price" class="price">
       {{ product.variants[0].price }}
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
      title: {
        type: String,
        default:''
      },
      price: {
        type: String,
        default:''
      },
    }
  },
  data() {
    const jsonld = {
      "@context": "https://schema.org",
      "@type": "Product",
      "description":"",
      "image":"",
      "name": this.product.title,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": this.product.variants[0].price,
        "priceCurrency": ""
      }
    };
    return {jsonld};
  },
  methods: {
    addToCart() {
      this.$emit("addedToCart");
    },
  },
}
</script>
<style lang="scss" scoped>
.ProductCard {
  border: 0.5rem solid #858585;
  border-radius: 0.4rem;
  padding: 1rem;
  .content {
    @include flexing('row');
    justify-content: space-between;
    margin-bottom: 1rem;
  }
}
</style>
