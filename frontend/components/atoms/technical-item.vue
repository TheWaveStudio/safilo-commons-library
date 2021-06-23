<template>
  <div :class="`TechnicalItem${` --${variant}`}`">
    <span class="info">
        <figure class="img-wrapper">
          <img class="image" :src="item.image.src" :alt="item.image.alt" />
        </figure>
      <span class="info-wrapper">
        <span class="category" v-if="item.category && variant==='technical'">{{ item.category }}</span>
        <span class="label">{{ item.label }}</span>
      </span>
    </span>
  </div>
</template>
<script>
export default {
  name:'TechnicalItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    variant: {
      type: String,
      default: "dropdown-item"
    }
  }
}
</script>
<style lang="scss">
.TechnicalItem{
  .info{
    align-items: center;
    @include flexing(row nowrap);
  }

  .img-wrapper {
    margin: 0 0.4rem 0 0;

    .image {
      height: 100%;
      object-fit: contain;
      object-position: center;
      width: 100%;
    }
  }
  .label{
    @include font-size-line-weight(16,24,400);
  }

  &.\--dropdown-item{
    .img-wrapper {
      height: 1.6rem;
      width: 1.6rem;
    }
  }

  &.\--technical{
    .img-wrapper {
      height: 2rem;
      width: 2rem;
    }

    .info-wrapper {
      @include flexing(column wrap);

      .category {
        color: $grey;
        @include font-size-line-weight(12,16,400);
      }
    }
  }
}
</style>
