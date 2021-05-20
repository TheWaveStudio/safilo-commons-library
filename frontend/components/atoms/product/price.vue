<template>
  <span :class="`ProductPrice${variant ? ` --${variant}` :''}`">
    <span class="currency">{{currency}}</span>&nbsp;<span class="price">{{price}}</span>
  </span>
</template>
<script>
export default{
  name: 'ProductPrice',
  props: {
    currency: {
      type: String,
      default: '',
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
