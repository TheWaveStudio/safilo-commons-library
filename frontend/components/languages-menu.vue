<template>
  <div class="LanguagesMenu">
    <button class="languages-menu__main-button" @click="$refs.languagesModal.isModalActive = !$refs.languagesModal.isModalActive ">
        <Icon :icon-name="currentMenu.icon" />
        <span class="languages__label --text-uppercase">{{currentMenu.buttonCode}}</span>
    </button>
    <Modal ref="languagesModal" class="LanguagesMenuModal" :has-default-open-button="false" type="center">
      <template #title>
        <h2 class="heading-h3 --text-uppercase">{{title}}</h2>
      </template>
      <template #main-content>
        <ul class="languages-menu__languages">
          <li class="languages-menu__item"
              v-for="(language, index) in menus"
              :key="index" >
            <button
                :class="`languages-menu__button${currentMenu.code === language.code ? ' --selected' : ''}`"
                @click="selected = language.url">
                <Icon class="languages-menu__flag" :icon-name="language.icon" />
                <span class="languages-menu__label-wrapper">
                  <span class="languages-menu__label">{{language.label}}</span>
                  <transition name="fade">
                    <Icon v-if="selected === language.url" icon-name="checked" />
                  </transition>
                </span>
            </button>
          </li>
        </ul>
        <Button :disabled="selected === currentMenu.url" :href="selected" tag="a" variant="modal" :label="ctaText" />
      </template>
    </Modal>
  </div>
 </template>
<script>
import Button from './atoms/button';
import Icon from './atoms/icon'
import Modal from './modal';
export default{
  name: 'LanguagesMenu',
  components: {
    Button,
    Icon,
    Modal
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    menus: {
      type: Array,
      default: () => []
    },
    currentLanguage: {
      type: String,
      default: 'en'
    },
    ctaText:{
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentMenu: this.menus.filter((item) => item.code.toLowerCase() === this.currentLanguage.toLowerCase())?.[0],
      selected: this.menus.filter((item) => item.code.toLowerCase() === this.currentLanguage.toLowerCase())?.[0]?.url
    }
  },
}
</script>
<style lang="scss" scoped>
.LanguagesMenu {
  .languages-menu {
    padding: 0.2rem 0;

    &__label{
      color: $primary;
      @include font-size-line-weight(16,24,400);
    }

    &__main-button{
      @include reset-button-style();

      align-items: center;
      @include flexing(row);
      padding: 0;

      ::v-deep .Icon{
        margin-right: 0.5rem;

        .inline-svg{
          height: 0.8rem;
          width: 1.2rem;
        }
      }
    }

    &__languages{
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    &__item:not(last-child){
      margin-bottom: 0.6rem;
    }

    &__button{
      @include reset-button-style();

      @include flexing(row);
      padding: 0;
      text-align: left;
      width:100%;

      .languages-menu__label-wrapper{
        border-bottom: 1px solid $language-grey;
        @include flexing(row);
        justify-content: space-between;
        flex: 1;
        padding-bottom: 0.7rem;
      }

      ::v-deep .languages-menu__flag{
        margin-right: 0.9rem;
        margin-top: 0.2rem;

        .inline-svg{
          height: 0.8rem;
          width: 1.2rem;
        }
      }
    }
  }

  .o-btn.\--cart{
    margin-top: 1.6rem;
    width: 100%;
  }
}
</style>
