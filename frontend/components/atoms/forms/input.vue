<template>
  <ValidationProvider
      :class="`Input input-group ${additionalClasses}`"
      :name="name"
      :rules="`${required}${rules}`"
      :tag="tag"
      v-slot="{ errors }"
  >
    <o-field>
      <o-input
          expanded
          :class="`form-field ${additionalInputClasses}`"
          :placeholder="placeholder"
          :type="type"
          v-model="field"
          :password-reveal="type==='password'"
      />
    </o-field>
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
    isRequired:{
      type:Boolean,
      default:false,
    },
    subMessage:{
      type:String,
      default:''
    },
    name:{
      type:String,
      default:''
    },
    placeholder:{
      type:String,
      default:''
    },
    rules:{
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
    @include font-size-line-weight(16,24,400);
    letter-spacing: 1px;
    padding-bottom: 0.4rem;
    width: 100%;

    @include placeholder(){
      color: $grey;
    }
  }

  .o-icon{
    background-color:$primary;
    height:1.2rem;
    width: 1.2rem;
  }
}
</style>
