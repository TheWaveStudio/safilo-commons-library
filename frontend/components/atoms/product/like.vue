<template>
  <o-button variant="product-like">Ciao<Icon id="heart" />Ciao</o-button>
</template>
<script>
import Icon from '../icon';
export default{
  name: 'ProductLike',
  components: {
    Icon
  }
}
</script>
<style lang="scss">
  .o-btn.o-btn--product-like{
    .Icon{
      .inline-svg{
        height:1.2rem;
        width:1.2rem;
      }
    }
  }
</style>
