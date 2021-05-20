<template>
    <o-dropdown-item class="DropdownItem" aria-role="listitem" :value="item.value"  @click="selected=!selected">
      <span class="info">
        <figure class="img-wrapper">
          <img class="image" :src="item.image.src" :alt="item.image.alt" />
        </figure>
        <span class="name">{{ item.label }}</span>
      </span>
      <span class="field-wrapper">
        <o-checkbox v-model="selected"/>
      </span>
    </o-dropdown-item>
</template>
<script>
export default{
  name: 'DropdownItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selected: false

    }
  },
}
</script>
<style lang="scss">
.DropdownItem {
  align-items: center;
  @include flexing(row nowrap);
  justify-content: space-between;
  padding: 0.5rem 0;

  .info{
    align-items: center;
    @include flexing(row nowrap);
  }
  .img-wrapper {
    height: 1.6rem;
    margin: 0 0.4rem 0 0;
    width: 1.6rem;
    .image {
      height: 100%;
      object-fit: contain;
      object-position: center;
      width: 100%;
    }
  }
  .o-chk{
    pointer-events:none;
  }
}
</style>
