<template>
  <div :class="`Badge${type ? ` --${type}` : ''}`">
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
    },
    type:{
      type: String,
      default:''
    },
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

  &.\--vertical{
    display: inline-block;
    transform: rotate(270deg);
    transform-origin: bottom left;
    .label{
      background: $secondary;
      border-color: $secondary;
      color: $white;
      @include font-size-line-weight(12,20,700);
      margin:0;
    }
  }
}
</style>
