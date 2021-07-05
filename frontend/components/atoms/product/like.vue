<template>
  <o-button variant="product-like" @click="updateItem">
    <IconComponent :icon-name="iconName" />
  </o-button>
</template>
<script>
import IconComponent from '../icon';
export default{
  name: 'ProductLike',
  components: {
    IconComponent
  },
  data () {
    return{
      isAdded: false
    }
  },
  computed:{
    iconName() {
      return this.isAdded ? 'product-like-selected' : 'product-like'
    }
  },
  methods:{
    updateItem(){
      this.isAdded = !this.isAdded;
      const event = this.isAdded ? 'addedToWishlist' : 'removedToWishlist'
      this.$emit(event);
    }
  }
}
</script>
<style lang="scss">
  .o-btn.o-btn--product-like{
    color: $primary;
    padding: 0;
    text-align: left;
    .o-btn__wrapper{
      >span{
        align-items: center;
        @include flexing(row);
        margin: 0;
      }
    }
    .Icon{
      .inline-svg{
        height:1.2rem;
        width:1.2rem;
      }
    }
  }
</style>
