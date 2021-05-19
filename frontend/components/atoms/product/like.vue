<template>
  <o-button :variant="`product-like${addedClass}`" @click="updateItem"><Icon id="heart" /></o-button>
</template>
<script>
import Icon from '../icon';
export default{
  name: 'ProductLike',
  components: {
    Icon
  },
  data () {
    return{
      isAdded: false
    }
  },
  computed:{
    addedClass() {
      return this.isAdded ? ' --added' : ''
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
    .Icon{
      .inline-svg{
        height:1.2rem;
        width:1.2rem;
      }
    }
    &.\--added{
      .inline-svg{
        background-color: $secondary;
      }
    }
  }
</style>
