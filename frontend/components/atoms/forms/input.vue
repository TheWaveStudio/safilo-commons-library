<template>
  <ValidationProvider
      :class="`Input input-group ${additionalClasses}`"
      :name="name"
      :rules="`${required}${rules}`"
      :tag="tag"
      v-slot="{ errors, classes }"
  >
    <div class="control" :class="classes">
      <o-field :label="label" :class="{
        active: isActive || !isActive && field,
        disabled: isDisabled
      }" >
        <o-input
            :class="`form-field ${additionalInputClasses}`"
            :type="type"
            v-model="field"
            :disabled="isDisabled"
            :password-reveal="type==='password'"
            @focus="isActive=true"
            @blur="isActive=false"
        />
      </o-field>
    </div>
    <span class="error-message">{{ errors[0] }}</span>
    <p class="sub-message" v-html="subMessage" v-if="subMessage"/>
  </ValidationProvider>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default{
  name:'InputField',
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
    isRequired:{
      type:Boolean,
      default:false,
    },
    name:{
      type:String,
      default:''
    },
    label:{
      type:String,
      default:''
    },
    rules:{
      type:String,
      default:''
    },
    subMessage:{
      type:String,
      default:''
    },
    tag:{
      type:String,
      default:'div'
    },
    type:{
      type:String,
      default:'text'
    }
  },
  data(){
    return{
      isActive: false,
      field:'',
    }
  },
  computed:{
    required(){
      return this.isRequired ? `required${this.rules ? '|' : ''}` : '';
    }
  }
}
</script>
<style lang="scss">
.Input {
  .o-input{
    border: 0;
    border-bottom: 1px solid $primary;
    @include font-size-line-weight(16,16,400);
    letter-spacing: 1px;
    padding: 0 0 0.5rem;
    width: 100%;

    @include placeholder(){
      color: $grey;
    }

    &:disabled{
      background-color: transparent;
      color: rgba($grey, 0.64);
    }
  }

  .o-icon{
    background-color:$primary;
    height:1.2rem;
    width: 1.2rem;
  }
}
</style>
