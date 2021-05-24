<template>
  <ValidationProvider
      :class="`Select input-group ${additionalClasses}`"
      :name="name"
      :rules="required"
      v-slot="{ errors, classes }"
  >
    <div class="control" :class="classes">
      <o-field :class="{
        disabled: isDisabled
      }" >
        <label class="select-label" v-if="label">{{label}}</label>
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
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default{
  name:'SelectField',
  components: {
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
  computed:{
    colorClass(){
      return this.field ? '' : ' --grey';
    },
    required(){
      return this.isRequired ? `required${this.rules ? '|' : ''}` : '';
    },
  }
}
</script>
<style lang="scss">
.Select {
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
}
</style>
