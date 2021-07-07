<template>
  <div :class="`QuantityInput --${site}`">
    <button class="quantity-input__button" @click="quantity > 1 && quantity-- && $emit('changed')">-</button>
    <input class="quantity-input__input" type="text" v-model="quantity"/>
    <button class="quantity-input__button" @click="quantity++ && $emit('changed')">+</button>
  </div>
</template>
<script>
export default{
  name: 'QuantityInput',
  props:{
    site:{
      type: String,
      default: 'cr'
    },
  },
  data () {
    return {
      quantity: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.QuantityInput{
  &.\--cr{
    align-items: center;
    border: 1px solid $primary;
    @include flexing(row);
    justify-content: space-between;
    max-width: 5rem;

    .quantity-input{
      &__button{
        @include reset-button-style();
        @include font-size-line-weight(12,16,400);
        flex: 1;
        padding: 0.4rem;
        text-align: center;
      }
      &__input{
        border: 0;
        flex: 0;
        max-width: 2rem;
        padding: 0;
        pointer-events: none;
        text-align: center;
        width: auto;
      }
    }
  }
}
</style>
