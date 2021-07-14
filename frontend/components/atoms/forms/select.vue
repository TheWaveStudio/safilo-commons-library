<template>
  <client-only>
    <ValidationProvider
      :class="`Select input-group ${additionalClasses}${isDisabled ? ' --disabled' : ''}`"
      :name="name"
      :rules="required"
      v-slot="{ errors, classes }"
  >
    <div class="control" :class="classes">
      <Icon class="select-icon" icon-name="caret-down" />
      <o-field :class="{
        disabled: isDisabled,
        active: field
      }" >
        <label :class="`select-label${!field ? ' --transparent' : ''}`" v-if="labelValue">{{labelValue}}</label>
        <o-select
            :class="`form-field ${additionalInputClasses}${colorClass}`"
            :disabled="isDisabled"
            :name="name"
            v-model="field">
          <option default selected value v-if="placeholder">{{placeholder}}</option>
          <option v-for="(option,index) in options" :key="index" :value="option.value">{{option.label}}</option>
        </o-select>
      </o-field>
    </div>
    <span class="error-message">{{ errors[0] }}</span>
    <p class="sub-message" v-html="subMessage" v-if="subMessage"/>
  </ValidationProvider>
  </client-only>
</template>
<script>
import Icon from '../icon'
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default{
  name:'SelectField',
  components: {
    Icon,
    ValidationObserver,
    ValidationProvider,
  },
  props:{
    additionalClasses:{
      type:String,
      default:''
    },
    additionalInputClasses:{
      type:String,
      default:''
    },
    dynamicValueLabel:{
      type:Boolean,
      default:false,
    },
    isDisabled:{
      type:Boolean,
      default:false,
    },
    label:{
      type:String,
      default:''
    },
    name:{
      type:String,
      default:''
    },
    options:{
      type: Array,
      default: () => []
    },
    placeholder:{
      type:String,
      default:''
    },
    isRequired:{
      type:Boolean,
      default:false,
    },
    startValue: null,
    subMessage:{
      type:String,
      default:''
    },
    tag:{
      type:String,
      default:'div'
    },
  },
  data(){
    return{
      field: '',
    }
  },
  mounted() {
    this.field = this.startValue ? this.startValue : this.field
  },
  computed:{
    colorClass(){
      return this.field ? '' : ' --grey';
    },
    labelValue(){
      const exist = this.options.find(o => o.value === this.field)?.showed?.toUpperCase();
      return exist?.length ? exist : this.label;
    },
    required(){
      return this.isRequired ? `required${this.rules ? '|' : ''}` : '';
    },
  },
}
</script>
<style lang="scss">
.Select {
  .control {
    position: relative;
  }

  .select-icon{
    position: absolute;
    right: 0;
    top: 80%;
    transform: translate3d(0,-80%,0);
  }

  &.input-group{
    label.select-label{
      letter-spacing: 1px;
      &.\--transparent{
        color: transparent;
      }
    }
  }

  .form-field{
    width: 100%;
  }
  .control:not(.invalid) {
    .form-field {
      &.\--grey {
        .o-sel {
          color: $grey;
        }
      }
    }
  }

  .o-field__body{
    > .o-field{
      flex-direction: column;
    }
  }

  .o-sel{
    background: none;
    border: 0;
    border-bottom: 1px solid $primary;
    @include font-size-line-weight(16,24,400);
    letter-spacing: 1px;
    padding-bottom: 0.4rem;
    width: 100%;

    @include placeholder(){
      color: $grey;
    }
  }

  &.\--disabled{
    .select-icon{
      color: $grey;
    }
  }
}
</style>
