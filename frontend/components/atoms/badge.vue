<template>
  <div class="Badge">
    <span class="label">{{ label }}</span>
  </div>
</template>
<script>
export default{
  name: 'Badge',
  props:{
    label:{
      type: String,
      default:''
    }
  }
}
</script>
<style lang="scss">
.Badge{
    align-items: center;
    @include flexing(row);
    justify-content: center;

    .label{
    border-bottom: 1px solid $primary;
    border-top: 1px solid $primary;
    color: $secondary;
    display: inline-block;

    @include font-size-line-weight(12,24,400);

    letter-spacing: 1px;
    margin: 0 auto;
    padding:0 0.3rem;
    text-transform: uppercase;
  }
}
</style>
