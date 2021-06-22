<template>
  <o-dropdown class="LanguagesMenu" :triggers="['hover']" aria-role="list">
    <o-button type="button" slot="trigger">
      <template>
        <figure class="language__img-wrapper">
          <img class="language__image" :src="currentMenu.image.src" :alt="currentMenu.image.alt" />
        </figure>
        <a class="language__link" :href="currentMenu.url">
          <span class="language__label">{{currentMenu.label}}</span>
        </a>
      </template>
    </o-button>
    <o-dropdown-item
        v-if="currentMenu.code !== language.code"
        class="language"
        aria-role="listitem"
        v-for="(language, index) in menus"
        :key="index" >
      <div class="language__wrapper">
        <figure class="language__img-wrapper">
          <img class="language__image" :src="language.image.src" :alt="language.image.alt" />
        </figure>
        <a class="language__link" :href="language.url">
          <span class="language__label">{{language.label}}</span>
        </a>
      </div>
    </o-dropdown-item>
  </o-dropdown>
</template>
<script>
export default{
  name: 'LanguagesMenu',
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    currentLanguage: {
      type: String,
      default: 'en'
    }
  },
  data () {
    return {
      currentMenu: this.menus.filter((item) => item.code.toLowerCase() === this.currentLanguage.toLowerCase())?.[0]
    }
  },
}
</script>
<style lang="scss" scoped>
.LanguagesMenu {
  .language{
    padding: 0.2rem 0;
    &__code{
      color: $primary;
      text-transform: uppercase;
    }

    &__img-wrapper{
      height: 1rem;
      margin: 0 0.4rem 0 0;
      width: 1.4rem;
    }

    &__image{
      display: block;
      height: 100%;
      object-fit: cover;
      object-position: center;
      width: 100%;
    }

    &__wrapper {
      align-items: center;

      @include flexing(row);

      margin-bottom: 0;
    }

    &__link{
      color: $primary;
      &:hover {
        text-decoration: none;
      }
    }
  }

  ::v-deep{
    .o-btn{
      padding-left: 0.1rem;

      &__wrapper {
        > span {
          align-items: center;

          @include flexing(row);

          margin: 0;
        }
      }
    }
    .o-drop{
      &__item--active{
        background: transparent;
      }
    }
  }
}
</style>
