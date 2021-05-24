<template>
  <ValidationProvider
      :class="`Radio input-group ${additionalClasses}`"
      :name="name"
      :rules="`${required}`"
      :tag="tag"
      v-slot="{ errors, classes }"
  >
    <div class="control" :class="classes">
      <div :class="`form-field block ${additionalInputClasses}`">
        <o-radio v-for="(radio, index) in radios"
                 :key="index"
                 v-model="field"
                 :name="name"
                 :disabled="isDisabled"
                 :native-value="radio.value">{{radio.label}}</o-radio>
      </div>
    </div>
    <span class="error-message">{{ errors[0] }}</span>
    <p class="sub-message" v-html="subMessage" v-if="subMessage"/>
  </ValidationProvider>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default{
  name:'RadioField',
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
    radios:{
      type: Array,
      default: () => []
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
.Radio {
  .o-radio{
    align-items: flex-start;
    margin-bottom: 0;

    &__check{
      background: $white;
      border: 2px solid $primary;
      height:1rem;
      margin-right: 0.4rem;
      width:1rem;

      &--checked{
        background-color: $primary;
        position: relative;

        &:after{
          background-color: $white;
          border-radius: 50%;
          content: '';
          display: block;
          height: 0.8em;
          left:50%;
          position: absolute;
          top:50%;
          transform: translate3d(-50%,-50%,0);
          width: 0.8em;
        }
      }
    }

    &--disabled{
      .o-radio__check{
        background-color: $white
      }

      .o-radio__check--checked {
        background-color: rgba($grey, 0.64);
      }

      .o-radio__check,
      .o-radio__check--checked{
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
