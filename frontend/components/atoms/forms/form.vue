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
        <no-ssr>
          <div v-for="item in fields" :key="item.name" :class="item.wrapperClass" >
            <component :is="item.componentName" v-bind="item.data" :ref="item.ref"/>
          </div>
        </no-ssr>
      </div>
      <div :class="buttonAlignment">
        <Button type="submit" v-bind="{...button}" :disabled="!valid"/>
      </div>
    </form>
    <slot name="after-form"></slot>
  </ValidationObserver>
</template>

<script>
import Button from '../button'
import Checkbox from './checkbox'
import Input from './input'
import Phone from './phone'
import Radio from './radio'
import Select from './select'
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
    @include media-breakpoint-down(md){
      button[type="submit"]{
        width: 100%;
      }
    }
  }
  button[type="submit"]{
    margin: 0.8rem 0 1.6rem;
  }
}
</style>
