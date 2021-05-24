<template>
  <span :class="`ProductPrice${variant ? ` --${variant}` :''}`"
    :itemprop="printMeta ? 'offers' : false" :itemscope="printMeta" :itemtype="printMeta ? 'https://schema.org/Offer': false">
    <span class="currency"
          :itemprop="printMeta ? 'priceCurrency' : false"
          :content="printMeta ? currency.name: false">
      {{currency.symbol}}
    </span>&nbsp;
    <span class="price"
          :itemprop="printMeta ? 'price' : false"
          :content="printMeta ? price: false" >
      {{price}}
    </span>
  </span>
</template>
<script>
export default{
  name: 'ProductPrice',
  props: {
    currency: {
      type: Object,
      default: {},
    },
    printMeta:{
      type: Boolean,
      default: true
    },
    price: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: '',
    }
  },
  computed: {
    wrapperMeta(){
      return this.hasMetas ? `itemprop="offers" itemscope itemtype="https://schema.org/Offer"` :''
    },
    currencyMeta(){
      return this.hasMetas ?  ` itemprop="priceCurrency" content="${this.currency.name}"` : ''
    },
    priceMeta(){
      return this.hasMetas ?  ` itemprop="price" content="${this.price}"` : ''
    }
  }
}
</script>
<style lang="scss">
.ProductPrice{
  align-items: center;
  color: currentColor;
  @include flexing(row);
  @include font-size-line-weight(16,24,400);

  &.\--bold{
    font-weight: 700;
  }

  &.\--small{
    @include font-size-line-weight(12,16,700);
  }

  &.\--medium{
    @include font-size-line-weight(14,40,400);
  }

  &.\--large{
    @include font-size-line-weight(20,24,700);
  }
}
</style>
