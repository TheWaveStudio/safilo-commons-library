<template>
  <ValidationObserver v-slot="{valid}" tag="div">
    <slot name="title"></slot>
    <slot name="subtitle"></slot>
    <form
        ref="form"
        :class="`Form ${formClass}`"
        @submit.prevent="onSubmit"
    >
      <div :class="wrapperFieldsClass">
        <div v-for="item in fields" :key="item.name" :class="item.wrapperClass" >
          <component :is="item.componentName" v-bind="item.data" :ref="item.ref"/>
        </div>
      </div>
      <slot name="before-submit-form"></slot>
      <div :class="buttonAlignment">
        <Button type="submit" v-bind="{...button}" :disabled="!valid"/>
        <slot name="after-button-form"></slot>
      </div>
    </form>
    <slot name="after-form"></slot>
  </ValidationObserver>
</template>

<script>
import Button from './atoms/button'
import Checkbox from './atoms/forms/checkbox'
import Input from './atoms/forms/input'
import Phone from './atoms/forms/phone'
import Radio from './atoms/forms/radio'
import Select from './atoms/forms/select'
import { ValidationObserver } from "vee-validate";
export default {
  name: "Form",
  components: {
    Button,
    Checkbox,
    Input,
    Phone,
    Radio,
    Select,
    ValidationObserver
  },
  props: {
    button:{
      type: Object,
      default: {}
    },
    buttonAlignment:{
      type: String,
      default: ''
    },
    fields:{
      type: Array,
      default: () =>[]
    },
    formClass:{
      type: String,
      default: ''
    },
    refValue:{
      type: String,
      default: ''
    },
    wrapperFieldsClass:{
      type: String,
      default: ''
    }
  },
  methods: {
    onSubmit(event) {
      this.$emit("submitted",event);
    },
  },
};
</script>
<style lang="scss">
.Form{
  &.\--full-width-submit-mobile{
    button[type="submit"]{
      width: 100%;
      @include media-breakpoint-up(md){
        width:auto;
      }
    }
  }
  button[type="submit"]{
    margin: 0.8rem 0 1.6rem;
  }
}
</style>
