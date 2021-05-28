<template>
  <ValidationProvider
      :class="`Checkbox input-group ${additionalClasses}`"
      :name="name"
      :rules="`${required}`"
      :tag="tag"
      v-slot="{ errors, classes }"
  >
    <div class="control" :class="classes">
      <div :class="`form-field ${additionalInputClasses}`">
        <o-checkbox v-model="field" :disabled="isDisabled" :name="name">{{label}}</o-checkbox>
      </div>
    </div>
    <span class="error-message">{{ errors[0] }}</span>
    <p class="sub-message" v-html="subMessage" v-if="subMessage"/>
  </ValidationProvider>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default{
  name:'CheckboxField',
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
    subMessage:{
      type:String,
      default:''
    },
    label:{
      type:String,
      default:''
    },
    name:{
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
.Checkbox {
  .o-chk{
    align-items: flex-start;
    margin-bottom: 0;

    &__check{
      border: 2px solid $primary;
      height:1.2rem;
      margin-right: 0.4rem;
      width:1.2rem;

      &--checked{
        background-color: $primary;
        background-size: 60%;
      }
    }

    &--disabled{
      .o-chk__check,
      .o-chk__check--checked{
        background-color: rgba($grey, 0.64);
        border-color: rgba($grey, 0.64);
        opacity:1;
      }
    }

    &__label{
      @include font-size-line-weight(14,20,400);
      letter-spacing: 1px;
    }
  }
}
</style>
